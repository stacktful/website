import { useEffect, useState } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";

import Backdrop from "./Backdrop";
import Logo from "./icons/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

import { repositoryUrl } from "../config";
import useLanguage from "../hooks/useLanguage";
import { formatMonth } from "../i18n/format";
import { pathForLanguage } from "../i18n/languages";

import "./Layout.css";

function Footer() {
  const { language, site } = useLanguage();
  return (
    <footer>
      <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
        <p>{site.footer.builtBy}</p>
        {/* eslint-disable-next-line no-undef -- injected by Vite (see vite.config.js) */}
        <p>{site.footer.lastUpdate(formatMonth(__BUILD_DATE__, language))}</p>
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

/* `links`: [{ id, label }] of the sections to link to, in page order */
function NavBar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const scrolled = useScrolled();
  const { language, site } = useLanguage();

  // transparent at the top of the page, frosted glass once scrolled (or while the mobile menu is open)
  const classes = [menuOpen && "menu-open", (scrolled || menuOpen) && "solid"].filter(Boolean).join(" ");

  return (
    <nav className={classes}>
      {/* lines the logo and links up with the content column */}
      <div className="nav-inner">
        <div className="nav-logo">
          <a href={pathForLanguage(language)}>
            <Logo />
          </a>
        </div>
        <ul className="nav-links-list" id="nav-links-list">
          {links.map(({ id, label }, index) => (
            <li key={id}>
              <a href={`#${id}`} onClick={closeMenu}>
                <span className="nav-item-index">0{index + 1}.</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <LanguageSwitcher />
          <ThemeToggle />
          {/* only visible on small screens, see Layout.css */}
          <button
            className="btn-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="nav-links-list"
            aria-label={menuOpen ? site.nav.closeMenu : site.nav.openMenu}
          >
            {menuOpen ? <HiMiniXMark /> : <HiMiniBars3 />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Layout({ navLinks, children }) {
  return (
    <>
      <Backdrop />
      <NavBar links={navLinks} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
