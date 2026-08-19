import React from 'react';
import { Search, X, ArrowUpDown } from 'lucide-react';
import { SortOption } from '../types';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  onClearFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
  onClearFilters,
}) => {
  const hasActiveFilters = searchQuery.trim() !== '';

  return (
    <div className="w-full border-b border-neutral-800/80 bg-[#0a0a0a]/70 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Sort Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
          {/* Search bar */}
          <div className="relative w-full sm:flex-1 sm:max-w-md">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
            <input
              id="projects-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search title, tech (e.g. Canvas, Netlify, React)..."
              className="w-full pl-9 pr-8 py-2 text-xs font-mono-code bg-neutral-950 border border-neutral-800 rounded-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 p-1"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort & Reset */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto">
            {hasActiveFilters && (
              <button
                id="clear-all-filters-btn"
                onClick={onClearFilters}
                className="text-[11px] font-mono-code text-neutral-400 hover:text-white flex items-center gap-1 px-2.5 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors shrink-0"
              >
                <X className="w-3 h-3 text-neutral-400" />
                <span>CLEAR</span>
              </button>
            )}

            <div className="flex items-center gap-1.5 text-xs font-mono-code text-neutral-400 ml-auto sm:ml-0">
              <ArrowUpDown className="w-3 h-3 text-neutral-400 shrink-0" />
              <span className="hidden sm:inline">SORT:</span>
              <select
                id="sort-projects-select"
                value={sortOption}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs font-mono-code py-1.5 px-2.5 rounded-sm focus:outline-none focus:border-neutral-600 cursor-pointer"
              >
                <option value="number-asc">[01 → 08] Index Asc</option>
                <option value="number-desc">[08 → 01] Index Desc</option>
                <option value="year-desc">Year (Newest)</option>
                <option value="title-asc">Title (A → Z)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
