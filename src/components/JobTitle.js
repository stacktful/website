function JobTitle({ role, company }) {
  return (
    <div className="job-title-container">
      <span className="job-role">{role}</span>
      <span className="job-at"> @ </span>
      <span className="job-company">{company}</span>
    </div>
  );
}

export default JobTitle;
