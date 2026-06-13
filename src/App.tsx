import { useMemo, useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './components/Dashboard';
import ComparisonPage from './components/ComparisonPage';
import SearchPage from './components/SearchPage';
import CoveragePage from './components/CoveragePage';
import AICoverageEstimator from './components/AICoverageEstimator';

const pageTabs = [
  { key: 'overview' as const, label: 'Overview' },
  { key: 'compare' as const, label: 'Compare Services' },
  { key: 'search' as const, label: 'Search' },
  { key: 'coverage' as const, label: 'Coverage' },
  { key: 'ai' as const, label: 'Cost Predictor' },
];

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activePage, setActivePage] = useState<'overview' | 'compare' | 'search' | 'coverage' | 'ai'>('overview');

  const themeClass = useMemo(() => (theme === 'dark' ? 'theme-dark' : 'theme-light'), [theme]);

  const renderPage = () => {
    switch (activePage) {
      case 'compare':
        return <ComparisonPage />;
      case 'search':
        return <SearchPage />;
      case 'coverage':
        return <CoveragePage />;
      case 'ai':
        return <AICoverageEstimator />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`app-shell ${themeClass}`}>
      <header className="app-header">
        <div className="header-left">
          <div className="header-title">
            <h1>Healthcare Plan Explorer</h1>
            <p className="eyebrow">Historical healthcare data for decisions</p>
            <p className="subtitle">
              Compare cost effectiveness, review historical coverage likelihood, and explore the right services for your needs.
            </p>
          </div>
        </div>
      </header>

      <nav className="top-navigation" aria-label="Main navigation">
        <div className="nav-tab-group">
          {pageTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`nav-tab ${activePage === tab.key ? 'active' : ''}`}
              onClick={() => setActivePage(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        </div>
      </nav>

      <main className="content-area">{renderPage()}</main>
    </div>
  );
};

export default App;
