import Logo from "../icons/Logo";

const navBarItems = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

function NavBarItem(props) {
  return (
    <li>
      <span className="nav-item-index">0{props.index + 1}.</span>
      <a href={props.href}>{props.name}</a>
    </li>
  );
}

// component
function NavBar() {
  return (
    <nav>
      <span className="nav-logo">
        <Logo />
      </span>
      <ul>
        {navBarItems.map((item, index) => (
          <NavBarItem key={index} index={index} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
