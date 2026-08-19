import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Code2, Layers, Search, RefreshCcw } from 'lucide-react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { ProjectCard } from './components/ProjectCard';
import { ProjectLedger } from './components/ProjectLedger';
import { ProjectIndex } from './components/ProjectIndex';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { ArchiveStats } from './components/ArchiveStats';
import { PROJECTS, CATEGORIES } from './data/projects';
import { Project, ProjectCategory, ViewMode, SortOption } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<SortOption>('number-asc');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState<boolean>(false);

  // Global Keyboard listener for Cmd+K / / shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsQuickSearchOpen(true);
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsQuickSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Projects': PROJECTS.length,
    };
    CATEGORIES.forEach((cat) => {
      if (cat === 'All Projects') return;
      counts[cat] = PROJECTS.filter((p) => p.category.includes(cat)).length;
    });
    return counts;
  }, []);

  // Filtered & Sorted Projects
  const filteredProjects = useMemo(() => {
    let result = [...PROJECTS];

    // Category filter
    if (activeCategory !== 'All Projects') {
      result = result.filter((p) => p.category.includes(activeCategory));
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.primaryCategory.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q)) ||
          p.fullDescription.toLowerCase().includes(q)
      );
    }

    // Sorting
    result.sort((a, b) => {
      if (sortOption === 'number-asc') {
        return a.number.localeCompare(b.number);
      } else if (sortOption === 'number-desc') {
        return b.number.localeCompare(a.number);
      } else if (sortOption === 'year-desc') {
        return b.year.localeCompare(a.year);
      } else if (sortOption === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return result;
  }, [activeCategory, searchQuery, sortOption]);

  const handleClearFilters = () => {
    setActiveCategory('All Projects');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#060606] text-neutral-200 bg-grid-pattern selection:bg-white selection:text-black flex flex-col justify-between font-sans">
      {/* Top Header */}
      <Header
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalProjects={PROJECTS.length}
        filteredCount={filteredProjects.length}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenQuickSearch={() => setIsQuickSearchOpen(true)}
      />

      {/* Filter Bar */}
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
        onClearFilters={handleClearFilters}
      />

      {/* Main Content Showcase */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-10 space-y-6 sm:space-y-8">
        {/* Archive Title & Section Marker */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 pb-3 sm:pb-4 border-b border-neutral-850">
          <div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono-code text-neutral-400 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              CATALOG INDEX &bull; ALL WORKS
            </div>
            <h2 className="text-xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Selected Works & Experiments
            </h2>
          </div>

          <div className="text-[11px] sm:text-xs font-mono-code text-neutral-400">
            SHOWING <span className="text-white font-bold">{filteredProjects.length}</span> OF{' '}
            <span className="text-neutral-400">{PROJECTS.length}</span> RECORDS
          </div>
        </div>

        {/* Dynamic Project Views */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-16 sm:py-20 text-center rounded-sm border border-dashed border-neutral-800 bg-neutral-950/40 p-6 sm:p-8 space-y-4 font-mono-code"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-800 bg-neutral-900 mx-auto flex items-center justify-center text-neutral-400">
                <Search className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-display">
                  No records match the current filter
                </h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto">
                  No projects found for query <span className="text-neutral-200">"{searchQuery}"</span> under <span className="text-neutral-200">"{activeCategory}"</span>.
                </p>
              </div>
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 text-xs transition-colors"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>RESET ALL FILTERS</span>
              </button>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  index={index}
                />
              ))}
            </motion.div>
          ) : viewMode === 'ledger' ? (
            <motion.div
              key="ledger-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectLedger
                projects={filteredProjects}
                onSelect={setSelectedProject}
              />
            </motion.div>
          ) : (
            <motion.div
              key="index-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectIndex
                projects={filteredProjects}
                onSelect={setSelectedProject}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Archive Footer & Tech Matrix */}
      <ArchiveStats
        projects={PROJECTS}
        onSelectCategory={setActiveCategory}
      />

      {/* Project Detailed View Modal */}
      <ProjectDetailModal
        project={selectedProject}
        allProjects={filteredProjects.length > 0 ? filteredProjects : PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />

      {/* Quick Command Search Modal (Cmd+K) */}
      <QuickSearchModal
        isOpen={isQuickSearchOpen}
        onClose={() => setIsQuickSearchOpen(false)}
        projects={PROJECTS}
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}
