function JobTitle({ role, company }) {
  return (
    <>
      <span className="job-role">{role}</span>
      &nbsp;
      <span className="job-at">@</span>
      &nbsp;
      <span className="job-company">{company}</span>
    </>
  );
}

export default JobTitle;
