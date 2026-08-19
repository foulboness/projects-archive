import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);

  // Keyboard navigation: Escape to close, Left/Right for prev/next
  useEffect(() => {
    if (!project) return;

    // Reset active image on project change
    setActiveImageIndex(0);
    setIsImageExpanded(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigateToSibling('prev');
      } else if (e.key === 'ArrowRight') {
        navigateToSibling('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock background body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, allProjects]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const navigateToSibling = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      onSelectProject(prevProject);
    } else {
      onSelectProject(nextProject);
    }
  };

  const currentGallery = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [project.image];

  return (
    <AnimatePresence>
      <div
        id="project-detail-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-detail-modal-container"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl my-auto rounded-sm border border-neutral-800 bg-[#0a0a0a] text-neutral-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="px-4 sm:px-5 py-3 border-b border-neutral-850 bg-neutral-950 flex items-center justify-between font-mono-code text-xs sticky top-0 z-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-bold text-white tracking-wider">
                [{project.number}]
              </span>
              <span className="text-neutral-700">/</span>
              <span className="text-neutral-300 font-medium text-[11px] sm:text-xs truncate max-w-[120px] sm:max-w-none">
                {project.primaryCategory}
              </span>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <span className="text-neutral-400 hidden md:inline">
                INDEX {currentIndex + 1} OF {allProjects.length}
              </span>
            </div>

            {/* Modal Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                id="modal-prev-btn"
                onClick={() => navigateToSibling('prev')}
                className="p-1.5 sm:px-2 sm:py-1 rounded hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                title="Previous Project (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden md:inline">PREV</span>
              </button>

              <button
                id="modal-next-btn"
                onClick={() => navigateToSibling('next')}
                className="p-1.5 sm:px-2 sm:py-1 rounded hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                title="Next Project (Right Arrow)"
              >
                <span className="hidden md:inline">NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="h-4 w-px bg-neutral-800 mx-0.5 sm:mx-1" />

              <button
                id="modal-close-btn"
                onClick={onClose}
                className="p-1.5 sm:px-2.5 sm:py-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] border border-neutral-800"
                title="Close Modal (Escape)"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">ESC</span>
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-7 overflow-y-auto space-y-6 sm:space-y-8 scrollbar-thin">
            {/* Title & Action Hero */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 pb-5 sm:pb-6 border-b border-neutral-900">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span
                    className={`text-[10px] font-mono-code px-2 py-0.5 rounded uppercase font-semibold ${
                      project.status === 'Production'
                        ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-800/60'
                        : project.status === 'Live Alpha'
                        ? 'bg-amber-950/90 text-amber-400 border border-amber-800/60'
                        : 'bg-neutral-900 text-neutral-300 border border-neutral-750'
                    }`}
                  >
                    STATUS: {project.status}
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">
                    YEAR: {project.year}
                  </span>
                  {project.role && (
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 hidden sm:inline-block">
                      ROLE: {project.role}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-base font-mono-code text-neutral-300 max-w-2xl">
                  {project.subtitle}
                </p>
              </div>

              {/* Direct Links */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                <a
                  id="modal-live-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-white text-black font-mono-code font-bold text-xs hover:bg-neutral-200 transition-colors shadow-lg"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>VIEW LIVE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  id="modal-github-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-750 font-mono-code text-xs transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>SOURCE CODE</span>
                </a>
              </div>
            </div>

            {/* Main Visual Showcase / Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden rounded-sm border border-neutral-800 bg-neutral-950 group">
                <img
                  src={currentGallery[activeImageIndex] || project.image}
                  alt={`${project.title} Preview`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Scanline & Grid Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-3 left-3 font-mono-code text-[11px] px-2.5 py-1 bg-black/80 backdrop-blur-md rounded border border-neutral-750 text-neutral-300">
                  PREVIEW [{activeImageIndex + 1} / {currentGallery.length}]
                </div>
              </div>

              {/* Gallery Thumbnails if multiple */}
              {currentGallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {currentGallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`relative w-20 h-12 rounded-sm overflow-hidden border transition-all shrink-0 ${
                        activeImageIndex === i
                          ? 'border-white ring-1 ring-white'
                          : 'border-neutral-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Narrative: Overview */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                PROJECT OVERVIEW
              </div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features Checklist */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                KEY FEATURES & CAPABILITIES
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm border border-neutral-850 bg-neutral-950 hover:border-neutral-750 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-xs font-mono-code font-bold text-white">
                        {feat.title}
                      </h4>
                      {feat.tag && (
                        <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                          {feat.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Technologies Stack */}
            <div className="space-y-3 pt-4 border-t border-neutral-900">
              <div className="text-xs font-mono-code text-neutral-400">
                TECHNOLOGY STACK USED:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono-code px-3 py-1 rounded bg-neutral-900 text-neutral-200 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer Navigation */}
            <div className="pt-6 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs">
              <button
                onClick={() => navigateToSibling('prev')}
                className="w-full sm:w-auto px-4 py-2.5 rounded border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREV: {prevProject.title}</span>
              </button>

              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors py-1"
              >
                [BACK TO ARCHIVE]
              </button>

              <button
                onClick={() => navigateToSibling('next')}
                className="w-full sm:w-auto px-4 py-2.5 rounded border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>NEXT: {nextProject.title}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
