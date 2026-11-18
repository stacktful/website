import { useEffect, useState } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";

import Backdrop from "./Backdrop";
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

/* true once the page has been scrolled down a little */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const scrolled = useScrolled();

  // transparent at the top of the page, frosted glass once scrolled (or while the mobile menu is open)
  const classes = [menuOpen && "menu-open", (scrolled || menuOpen) && "solid"].filter(Boolean).join(" ");

  return (
    <nav className={classes}>
      {/* lines the logo and links up with the content column */}
      <div className="nav-inner">
        <div className="nav-logo">
          <a href="/">
            <Logo />
          </a>
        </div>
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
        <div className="nav-actions">
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
      </div>
    </nav>
  );
}

function Layout({ children }) {
  return (
    <>
      <Backdrop />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
