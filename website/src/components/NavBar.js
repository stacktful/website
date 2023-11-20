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
    textDecoration: "none",
  },
  navBarItemIndex: {
    color: "gray",
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
      <span style={styles.navBarItemIndex}>{props.index}.</span>
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
          <NavBarItem index={index} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
