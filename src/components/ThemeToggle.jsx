import { motion } from "framer-motion";

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[var(--card-color)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-fg transition hover:scale-105 hover:border-accent/60"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="inline-flex h-4 w-4 items-center justify-center"
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0-1.21 4.79 1.79 7.79s8 2 8 2z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </motion.span>
      {isDark ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeToggle;

