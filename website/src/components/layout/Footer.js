const repositoryUrl = "https://github.com/stacktful/website";

function Footer() {
  return (
    <footer>
      <a href={repositoryUrl} target="_blank">
        <p>Designed & built by Thibaut van Bergen</p>
        <p>Last update: Dec 2023</p>
      </a>
    </footer>
  );
}

export default Footer;
