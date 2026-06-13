type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    className="theme-toggle"
    type="button"
    onClick={onToggle}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
  >
    {theme === 'dark' ? '☀︎' : '🌙'}
  </button>
);

export default ThemeToggle;
