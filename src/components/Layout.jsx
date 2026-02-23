import { NavLink, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { navItems, siteMeta, topBar, footerData } from "../data/siteData";

const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderNavItem = (item) => {
    if (item.children) {
      return (
        <li key={item.label} className="nav-item">
          <span className="nav-link">{item.label}</span>
          <div className="dropdown-menu">
            {item.children.map((child) => (
              <NavLink key={child.label} to={child.path} className={linkClass}>
                {child.label}
              </NavLink>
            ))}
          </div>
        </li>
      );
    }

    return (
      <li key={item.label} className="nav-item">
        <NavLink to={item.path} className={linkClass}>
          {item.label}
        </NavLink>
      </li>
    );
  };

  return (
    <div className="app">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-pill">{siteMeta.shortName}</span>
            <span>{topBar.message}</span>
          </div>
          <div className="topbar-actions">
            <div className="topbar-socials">
              {topBar.socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
            {topBar.actions.map((action) => (
              <Link key={action.label} className="button" to={action.href}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Link className="logo" to="/">
            {siteMeta.name}
          </Link>
          <nav className="nav">
            <ul className="nav-list">{navItems.map(renderNavItem)}</ul>
          </nav>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? "×" : "="}
          </button>
        </div>
        {mobileOpen && (
          <div className="container mobile-nav">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <strong>{item.label}</strong>
                  {item.children.map((child) => (
                    <NavLink key={child.label} to={child.path} className={linkClass}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink key={item.label} to={item.path} className={linkClass}>
                  {item.label}
                </NavLink>
              )
            )}
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>{siteMeta.shortName}</h4>
            <p>{footerData.about}</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="list">
              {footerData.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="list">
              {footerData.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Branch Office</h4>
            <ul className="list">
              {footerData.branchOffice.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {siteMeta.name}</span>
          <span>Designed for RSYMS clone in React</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
