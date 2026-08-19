import React from 'react';
import { Terminal, Code, Cpu, Layers } from 'lucide-react';
import { Project } from '../types';

interface ArchiveStatsProps {
  projects: Project[];
  onSelectCategory: (category: any) => void;
}

export const ArchiveStats: React.FC<ArchiveStatsProps> = ({ projects, onSelectCategory }) => {
  // Aggregate all unique technologies used
  const allTechs = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();

  return (
    <footer className="w-full border-t border-neutral-800 bg-[#070707] py-8 sm:py-12 text-neutral-400 font-mono-code text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Top summary grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 sm:pb-8 border-b border-neutral-900">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-bold tracking-wider">
              <Terminal className="w-4 h-4 text-neutral-400" />
              <span>PROJECTS//ARCHIVE</span>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-sans">
              Dedicated exclusively to showcasing creative code, interactive systems, and digital product craft. Zero clutter, pure output.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase text-neutral-500 font-bold block">
              ARCHIVE METRICS
            </span>
            <div className="text-white text-sm sm:text-base font-bold">
              {projects.length} CURATED BUILDS
            </div>
            <div className="text-[11px] text-neutral-500">
              100% Client-Side Production Ready
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase text-neutral-500 font-bold block">
              RUNTIME ENVIRONMENT
            </span>
            <div className="text-white text-sm sm:text-base font-bold">
              VITE // REACT 19
            </div>
            <div className="text-[11px] text-neutral-500">
              Tailwind CSS v4 &bull; Motion Core
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase text-neutral-500 font-bold block">
              CATALOG REVISION
            </span>
            <div className="text-white text-sm sm:text-base font-bold">
              BUILD 2026.01
            </div>
            <div className="text-[11px] text-neutral-500">
              Immutable Digital Index
            </div>
          </div>
        </div>

        {/* Technologies Index Cloud */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[11px] uppercase text-neutral-500 font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNOLOGY INDEX ACROSS ALL RECORDS ({allTechs.length})</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {allTechs.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded bg-neutral-900/80 border border-neutral-800 text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            PROJECTS//ARCHIVE &copy; {new Date().getFullYear()} &bull; ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-500">FORMAT: EDITORIAL ARCHIVE</span>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-400">DESIGN + CODE ONLY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
