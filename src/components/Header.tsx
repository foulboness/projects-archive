import React, { useState, useEffect } from 'react';
import { LayoutGrid, ListFilter, AlignLeft, Search, Terminal, Sparkles } from 'lucide-react';
import { ViewMode } from '../types';

interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  totalProjects: number;
  filteredCount: number;
  activeCategory: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenQuickSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onViewModeChange,
  totalProjects,
  filteredCount,
  activeCategory,
  searchQuery,
  onSearchChange,
  onOpenQuickSearch,
}) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-neutral-800 bg-[#080808]/95 backdrop-blur-md sticky top-0 z-40">
      {/* Top telemetry bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 border-b border-neutral-900 flex items-center justify-between text-[11px] font-mono-code text-neutral-400 gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ONLINE
          </span>
          <span className="text-neutral-700">|</span>
          <span className="text-neutral-400 text-[10px] sm:text-[11px]">
            <span className="text-neutral-200 font-bold">{filteredCount}</span> OF {totalProjects} BUILDS
          </span>
          <span className="text-neutral-700 hidden md:inline">|</span>
          <span className="text-neutral-400 hidden md:inline">
            CATALOG: <span className="text-neutral-200 uppercase">ALL WORKS</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-neutral-400">
          <span className="hidden lg:inline text-neutral-500">UTC: {currentTime}</span>
          <button
            id="quick-search-shortcut-btn"
            onClick={onOpenQuickSearch}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-neutral-800 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 transition-colors text-[11px] font-mono-code"
            title="Search projects (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-neutral-400" />
            <span>SEARCH</span>
            <kbd className="hidden sm:inline-block bg-neutral-800 px-1 py-0.2 rounded text-[9px] text-neutral-400 border border-neutral-700">⌘K</kbd>
          </button>
        </div>
      </div>

      {/* Main Brand & Controls Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm border border-neutral-700 bg-neutral-950 flex items-center justify-center text-white shrink-0 shadow-inner">
            <Terminal className="w-4 h-4 text-neutral-200" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              <h1 className="text-base sm:text-xl md:text-2xl font-display font-extrabold tracking-tight text-white flex items-center gap-0.5 whitespace-nowrap">
                <span>PROJECTS</span>
                <span className="text-neutral-500 font-mono-code text-sm sm:text-base px-0.5">//</span>
                <span>ARCHIVE</span>
              </h1>
              <span className="text-[9px] sm:text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 shrink-0 whitespace-nowrap">
                LOG v1.0
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5 tracking-tight font-tech hidden sm:block">
              A curated index of software, interface systems, and creative engineering experiments.
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-1 sm:pt-0 border-t border-neutral-900 sm:border-0">
          <span className="text-[11px] font-mono-code text-neutral-400 hidden lg:inline">VIEW:</span>
          <div className="inline-flex rounded-sm p-0.5 bg-neutral-950 border border-neutral-800 w-full sm:w-auto justify-stretch sm:justify-start">
            <button
              id="view-mode-grid-btn"
              onClick={() => onViewModeChange('grid')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono-code transition-all ${
                viewMode === 'grid'
                  ? 'bg-neutral-800 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
              }`}
              title="Card Showcase View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID</span>
            </button>

            <button
              id="view-mode-ledger-btn"
              onClick={() => onViewModeChange('ledger')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono-code transition-all ${
                viewMode === 'ledger'
                  ? 'bg-neutral-800 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
              }`}
              title="Archive Ledger View"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>LEDGER</span>
            </button>

            <button
              id="view-mode-index-btn"
              onClick={() => onViewModeChange('index')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono-code transition-all ${
                viewMode === 'index'
                  ? 'bg-neutral-800 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
              }`}
              title="Minimalist Typographic Index"
            >
              <AlignLeft className="w-3.5 h-3.5" />
              <span>INDEX</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
