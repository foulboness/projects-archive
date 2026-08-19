import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectLedgerProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ProjectLedger: React.FC<ProjectLedgerProps> = ({ projects, onSelect }) => {
  return (
    <div className="w-full">
      {/* Mobile Card List (Visible only on < sm) */}
      <div className="sm:hidden space-y-2.5">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.03 }}
            onClick={() => onSelect(project)}
            className="p-3.5 rounded-sm border border-neutral-800 bg-neutral-950/80 hover:bg-neutral-900/60 transition-colors space-y-2.5 cursor-pointer"
          >
            <div className="flex items-center justify-between font-mono-code text-[11px]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">[{project.number}]</span>
                <span className="text-neutral-600">//</span>
                <span className="text-neutral-400">{project.primaryCategory}</span>
              </div>
              <span className="text-neutral-400">{project.year}</span>
            </div>

            <div>
              <div className="font-display font-bold text-base text-white flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </div>
              <p className="text-xs text-neutral-400 font-mono-code mt-0.5 line-clamp-1">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-900 font-mono-code text-xs">
              <div className="flex items-center gap-1.5">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded text-neutral-400 hover:text-white"
                  title="Code"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded text-neutral-400 hover:text-white"
                  title="Live"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => onSelect(project)}
                  className="px-2 py-0.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-[10px] font-semibold ml-1"
                >
                  SPEC
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop & Tablet Table (Hidden on < sm) */}
      <div className="hidden sm:block w-full overflow-x-auto border border-neutral-800 rounded-sm bg-neutral-950">
        <table className="w-full text-left text-xs font-mono-code divide-y divide-neutral-850">
          <thead className="bg-neutral-900/80 text-neutral-400 uppercase text-[10px] tracking-wider">
            <tr>
              <th className="py-3.5 px-4 font-semibold w-16">REC //</th>
              <th className="py-3.5 px-4 font-semibold min-w-[220px]">PROJECT & SUBTITLE</th>
              <th className="py-3.5 px-4 font-semibold hidden md:table-cell">PRIMARY DOMAIN</th>
              <th className="py-3.5 px-4 font-semibold hidden lg:table-cell">CORE TECHNOLOGIES</th>
              <th className="py-3.5 px-4 font-semibold w-20">YEAR</th>
              <th className="py-3.5 px-4 font-semibold hidden sm:table-cell w-28">STATUS</th>
              <th className="py-3.5 px-4 font-semibold text-right w-36">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-900">
            {projects.map((project, idx) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                onClick={() => onSelect(project)}
                className="group hover:bg-neutral-900/50 cursor-pointer transition-colors"
              >
                {/* Record Number */}
                <td className="py-4 px-4 font-bold text-neutral-400 group-hover:text-white transition-colors">
                  [{project.number}]
                </td>

                {/* Title & Subtitle */}
                <td className="py-4 px-4">
                  <div className="font-display font-bold text-sm text-white group-hover:text-neutral-200 transition-colors flex items-center gap-1.5">
                    {project.title}
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono-code truncate max-w-xs mt-0.5">
                    {project.subtitle}
                  </div>
                </td>

                {/* Primary Category */}
                <td className="py-4 px-4 text-neutral-300 hidden md:table-cell">
                  <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px]">
                    {project.primaryCategory}
                  </span>
                </td>

                {/* Core Technologies */}
                <td className="py-4 px-4 hidden lg:table-cell">
                  <div className="flex flex-wrap gap-1 max-w-sm">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-900/80 text-neutral-400 border border-neutral-800/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] text-neutral-400 px-1 py-0.5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </td>

                {/* Year */}
                <td className="py-4 px-4 text-neutral-400">{project.year}</td>

                {/* Status */}
                <td className="py-4 px-4 hidden sm:table-cell">
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded uppercase font-semibold inline-block ${
                      project.status === 'Production'
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50'
                        : project.status === 'Live Alpha'
                        ? 'bg-amber-950/80 text-amber-400 border border-amber-800/50'
                        : 'bg-neutral-900 text-neutral-300 border border-neutral-800'
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                {/* Action Buttons */}
                <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end gap-2 text-neutral-400">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded hover:bg-neutral-800 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded hover:bg-neutral-800 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => onSelect(project)}
                      className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-[10px] ml-1 font-semibold"
                    >
                      <span>SPEC</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
