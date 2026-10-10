import React from 'react';
import { Flame, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-lg border-b border-stone-100 dark:border-stone-800">
      <div className="max-w-md mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame size={20} className="text-rose-400 fill-rose-100 dark:fill-rose-900" />
          <span className="font-bold text-sm text-stone-700 dark:text-stone-100 tracking-tight">Asado Match</span>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={isDark}
          aria-label="Modo oscuro"
          onClick={onToggleTheme}
          className="relative inline-flex items-center w-14 h-8 rounded-full bg-stone-200 dark:bg-stone-700 transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200 dark:focus-visible:ring-rose-900"
        >
          <span
            className={`absolute top-1 left-1 flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${isDark ? 'translate-x-6' : ''}`}
          >
            {isDark
              ? <Moon size={14} className="text-violet-400" />
              : <Sun size={14} className="text-amber-500" />
            }
          </span>
        </button>
      </div>
    </header>
  );
};
