import { useMemo, useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './components/Dashboard';
import ComparisonPage from './components/ComparisonPage';
import SearchPage from './components/SearchPage';
import CoveragePage from './components/CoveragePage';
import AICoverageEstimator from './components/AICoverageEstimator';
import Disclaimer from './components/Disclaimer';
import TermsOfService from './components/TermsOfService';

// Ordered list of top-level navigation tabs; order here controls render order in the nav bar
const pageTabs = [
  { key: 'overview' as const, label: 'Overview' },
  { key: 'compare' as const, label: 'Compare Services' },
  { key: 'search' as const, label: 'Search' },
  { key: 'coverage' as const, label: 'Coverage' },
  { key: 'ai' as const, label: 'Cost Predictor' },
];

type PageKey = (typeof pageTabs)[number]['key'];

// Root component: owns global theme, active-page, and ToS acceptance state
const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activePage, setActivePage] = useState<PageKey>('overview');

  // Initialise from localStorage so returning users aren't shown the modal again
  const [tosAccepted, setTosAccepted] = useState<boolean>(
    () => localStorage.getItem('tos-accepted') === 'true'
  );

  const handleTosAccept = () => {
    localStorage.setItem('tos-accepted', 'true');
    setTosAccepted(true);
  };

  // CSS class applied to the outermost element to drive theme-scoped custom properties
  const themeClass = useMemo(() => (theme === 'dark' ? 'theme-dark' : 'theme-light'), [theme]);

  // Swaps in the correct page component based on the active nav tab
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
      {/* Blocks the app on first visit until the user accepts the terms */}
      {!tosAccepted && <TermsOfService onAccept={handleTosAccept} />}
      {/* Static branding header */}
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

      {/* Top navigation: tab buttons + theme toggle */}
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

      {/* Page content area — swapped by renderPage() */}
      <main className="content-area">{renderPage()}</main>

      {/* Legal footer — shown on every page */}
      <Disclaimer />
    </div>
  );
};

export default App;
