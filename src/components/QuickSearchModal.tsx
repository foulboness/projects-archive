import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Layers, CornerDownLeft } from 'lucide-react';
import { Project } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = projects.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.primaryCategory.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        onSelectProject(filtered[selectedIndex]);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      id="quick-search-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-sm border border-neutral-700 bg-neutral-950 shadow-2xl overflow-hidden font-mono-code"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-neutral-800 bg-[#0c0c0c]">
          <Search className="w-4 h-4 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects by keyword, tech, category, or problem..."
            className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
          />
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
            <kbd className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">ESC</kbd>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto divide-y divide-neutral-900 scrollbar-thin">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-neutral-500">
              No matching records found in archive. Try searching for "WASM", "Canvas", "React", or "Audio".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProject(item);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3.5 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                    isSelected ? 'bg-neutral-800/80 text-white' : 'hover:bg-neutral-900/40 text-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-[11px] font-bold text-neutral-400 shrink-0">
                      [{item.number}]
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-bold font-display text-white truncate flex items-center gap-2">
                        {item.title}
                        <span className="text-[10px] font-mono-code font-normal text-neutral-400">
                          — {item.primaryCategory}
                        </span>
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono-code truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hidden sm:inline">
                      {item.year}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[10px] text-white font-bold bg-white/10 px-1.5 py-0.5 rounded">
                        <span>OPEN</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-neutral-900/60 border-t border-neutral-850 flex items-center justify-between text-[10px] text-neutral-500">
          <span>NAVIGATION: [↑ / ↓] SELECT &nbsp;•&nbsp; [ENTER] LAUNCH &nbsp;•&nbsp; [ESC] DISMISS</span>
          <span>{filtered.length} MATCHES</span>
        </div>
      </motion.div>
    </div>
  );
};
