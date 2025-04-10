import Logo from "./icons/Logo";

const navBarItems = [
  { name: "Services", href: "#services" },
  { name: "Tech Stack", href: "#teckstack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const repositoryUrl = "https://github.com/stacktful/website";

function Footer() {
  return (
    <footer>
      <a href={repositoryUrl} target="_blank">
        <p>Designed & built by Thibaut van Bergen</p>
        <p>Last update: Mar 2025</p>
      </a>
    </footer>
  );
}

function NavBar() {
  return (
    <nav>
      <div className="nav-logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="nav-links">
        <ul className="nav-links-list">
          {navBarItems.map((item, index) => (
            <li key={index}>
              <span className="nav-item-index">0{index + 1}.</span>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
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
