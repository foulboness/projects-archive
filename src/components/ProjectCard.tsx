import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  return (
    <motion.div
      id={`project-card-${project.id}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative flex flex-col justify-between rounded-sm border border-neutral-800/80 bg-neutral-950/60 hover:bg-neutral-900/40 hover:border-neutral-700 transition-all duration-300 overflow-hidden"
    >
      {/* Top Technical Metadata Bar */}
      <div className="px-4 py-3 border-b border-neutral-850 flex items-center justify-between font-mono-code text-[11px] bg-neutral-950/80">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-wider">
            [{project.number}]
          </span>
          <span className="text-neutral-600">//</span>
          <span className="text-neutral-400 font-medium">{project.primaryCategory}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-neutral-400 font-mono-code">{project.year}</span>
          <span
            className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-semibold ${
              project.status === 'Production'
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50'
                : project.status === 'Live Alpha'
                ? 'bg-amber-950/80 text-amber-400 border border-amber-800/50'
                : 'bg-neutral-900 text-neutral-300 border border-neutral-750'
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Main Visual Preview (Click to Inspect) */}
      <div
        onClick={() => onSelect(project)}
        className="relative aspect-video w-full overflow-hidden bg-neutral-900 cursor-pointer group/image"
      >
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter sm:grayscale sm:contrast-110 sm:brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
        />

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

        {/* Corner coordinates / badge */}
        <div className="absolute top-2.5 right-2.5 font-mono-code text-[10px] px-2 py-0.5 bg-black/80 backdrop-blur-md border border-neutral-700/60 rounded text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
          INSPECT [↵]
        </div>

        {/* Bottom bar inside image */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono-code text-white/90 drop-shadow">
          <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10 text-[10px]">
            <Layers className="w-3 h-3 text-neutral-400" />
            {project.technologies.slice(0, 2).join(' + ')}
          </span>
          <span className="flex items-center gap-1 bg-white text-black font-semibold text-[10px] px-2 py-0.5 rounded opacity-90 sm:opacity-0 sm:group-hover/image:opacity-100 transition-opacity">
            <span>SPEC</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title and Subtitle */}
          <div
            onClick={() => onSelect(project)}
            className="cursor-pointer group/title"
          >
            <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover/title:text-neutral-200 transition-colors flex items-center justify-between gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover/title:text-white transition-colors shrink-0" />
            </h3>
            <p className="text-xs font-mono-code text-neutral-400 mt-1 font-medium line-clamp-1">
              {project.subtitle}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed line-clamp-2 font-sans">
            {project.shortDescription}
          </p>
        </div>

        {/* Technologies Tags */}
        <div className="mt-3.5 pt-2.5 border-t border-neutral-900">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-neutral-900/90 text-neutral-300 border border-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer: Links and Case Study */}
      <div className="px-4 sm:px-5 py-3 bg-neutral-950 border-t border-neutral-850 flex items-center justify-between text-xs font-mono-code">
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id={`link-github-${project.id}`}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors px-1 py-0.5 rounded hover:bg-neutral-900"
            title="GitHub Repository"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="text-[11px]">CODE</span>
          </a>

          <span className="text-neutral-700">/</span>

          <a
            id={`link-live-${project.id}`}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors px-1 py-0.5 rounded hover:bg-neutral-900"
            title="Live Application Demo"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="text-[11px]">LIVE</span>
          </a>
        </div>

        <button
          id={`inspect-btn-${project.id}`}
          onClick={() => onSelect(project)}
          className="flex items-center gap-1 text-[11px] font-mono-code text-neutral-300 hover:text-white transition-colors px-2 py-1 rounded bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800"
        >
          <span>VIEW SPEC</span>
          <span className="text-neutral-400">→</span>
        </button>
      </div>
    </motion.div>
  );
};
