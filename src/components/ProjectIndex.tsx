import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectIndexProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ProjectIndex: React.FC<ProjectIndexProps> = ({ projects, onSelect }) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <div className="relative w-full">
      {/* List of projects in large editorial typography */}
      <div className="divide-y divide-neutral-850 border-t border-b border-neutral-850">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.04 }}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject((prev) => (prev?.id === project.id ? null : prev))}
            onClick={() => onSelect(project)}
            className="group py-4 sm:py-7 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-neutral-900/30 transition-colors"
          >
            <div className="flex items-start sm:items-baseline gap-3 sm:gap-6">
              <span className="font-mono-code text-xs sm:text-base font-bold text-neutral-400 group-hover:text-white transition-colors shrink-0 pt-1 sm:pt-0">
                [{project.number}]
              </span>
              <div>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-display font-extrabold text-white group-hover:translate-x-1.5 sm:group-hover:translate-x-2 transition-transform duration-200 tracking-tight flex items-center gap-2 sm:gap-3">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs font-mono-code text-neutral-400 mt-1 max-w-xl">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-8 text-xs font-mono-code text-neutral-400 w-full md:w-auto pt-2 md:pt-0 border-t border-neutral-900/60 md:border-0">
              <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] sm:text-[11px] text-neutral-300">
                {project.primaryCategory}
              </span>
              <span className="text-neutral-400">{project.year}</span>
              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded hover:bg-neutral-800 hover:text-white transition-colors"
                  title="Source Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded hover:bg-neutral-800 hover:text-white transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Image Preview on Hover (Fixed corner overlay on desktop) */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="hidden xl:block fixed bottom-8 right-8 z-30 w-80 rounded-sm border border-neutral-700 bg-neutral-950 p-2 shadow-2xl pointer-events-none"
          >
            <div className="aspect-video w-full overflow-hidden rounded-sm bg-neutral-900 mb-2">
              <img
                src={hoveredProject.image}
                alt={hoveredProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </div>
            <div className="px-1 text-xs font-mono-code">
              <div className="flex items-center justify-between text-[11px] text-neutral-400">
                <span>{hoveredProject.number} // {hoveredProject.primaryCategory}</span>
                <span>{hoveredProject.year}</span>
              </div>
              <div className="font-bold text-white mt-0.5 truncate">{hoveredProject.title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
