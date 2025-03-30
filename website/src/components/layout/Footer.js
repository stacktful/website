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

export default Footer;
