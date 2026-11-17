import { useState } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";

import Logo from "./icons/Logo";
import ThemeToggle from "./ThemeToggle";

import { navLinks, repositoryUrl } from "../config";

function Footer() {
  return (
    <footer>
      <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
        <p>Designed & built by Thibaut van Bergen</p>
        {/* eslint-disable-next-line no-undef -- injected by Vite (see vite.config.js) */}
        <p>Last update: {__BUILD_DATE__}</p>
      </a>
    </footer>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={menuOpen ? "menu-open" : ""}>
      <div className="nav-logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="nav-links">
        <ul className="nav-links-list" id="nav-links-list">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={closeMenu}>
                <span className="nav-item-index">0{index + 1}.</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        {/* only visible on small screens, see App.css */}
        <button
          className="btn-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-links-list"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <HiMiniXMark /> : <HiMiniBars3 />}
        </button>
      </div>
    </nav>
  );
}

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
