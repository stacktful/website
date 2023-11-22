// styles constants
const styles = {
  nav: {
    height: "7.5vh",
    width: "100%",
    color: "var(--primary-color)",
  },
  logo: {
    height: "7.5vh",
    width: "7.5vh",
    color: "white",
    border: "1px solid red",
    float: "left",
    alignItems: "center",
  },
  ul: {
    height: "7.5vh",
    paddingLeft: "50%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  a: {
    fontSize: "1rem",
    textDecoration: "none",
  },
  navBarItemIndex: {
    color: "#BED3D8",
    marginRight: "5px",
    fontFamily: "Fira Code",
  },
};

const navBarItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function NavBarItem(props) {
  return (
    <li>
      <span style={styles.navBarItemIndex}>0{props.index + 1}.</span>
      <a style={styles.a} href={props.href}>
        {props.name}
      </a>
    </li>
  );
}

// component
function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Logo</div>
      <ul style={styles.ul}>
        {navBarItems.map((item, index) => (
          <NavBarItem key={index} index={index} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
