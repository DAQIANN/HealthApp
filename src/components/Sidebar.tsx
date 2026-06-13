// NOTE: Sidebar is not currently used — the app navigates via the top nav bar in App.tsx.
// Kept here in case a collapsible sidebar layout is added later.
// Also missing the 'ai' tab that App.tsx has; update TabKey if this is reactivated.

type TabKey = 'overview' | 'compare' | 'search' | 'coverage';

type SidebarProps = {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
  open: boolean;
  onToggle: () => void;
};

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: 'overview', label: 'Overview' },
  { key: 'compare', label: 'Compare Services' },
  { key: 'search', label: 'Search' },
  { key: 'coverage', label: 'Coverage' },
];

const Sidebar = ({ activeTab, onChange, open, onToggle }: SidebarProps) => (
  <nav className={`sidebar ${open ? 'open' : 'closed'}`} aria-label="Main navigation">
    <div className="sidebar-top">
      <button type="button" className="sidebar-close" onClick={onToggle} title="Close menu">
        ☰
      </button>
    </div>
    <div className="sidebar-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          className={`sidebar-tab ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </nav>
);

export default Sidebar;
