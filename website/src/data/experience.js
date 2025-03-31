import jobsData from "./json/jobs";
import activitiesData from "./json/activities";

function parseJobs(data) {
  // This function parses the jobs from the JSON data
  // and returns an array of parsed jobs.
  const parsedJobs = [];

  for (const job of data) {
    // Check if the job has multiple projects
    if (job.projects.length == 1) {
      var parsedJob = parseJob(job);
      parsedJobs.push(parsedJob);
    }
    if (job.projects.length > 1) {
      parsedJobs.push(...job.projects);
    }
  }
  return parsedJobs;
}

function parseJob(object) {
  // This is assumes that the job has only one project
  const { projects, ...jobInfo } = object;
  return { ...jobInfo, ...object.projects[0] };
}

function parseActivities(data) {
  // This function parses the activities from the JSON data
  // and returns an array of parsed activities.
  const parsedActivities = [];
  for (const activity of data) {
    // Check if the job has multiple projects
    if (activity.title.includes("President")) {
      continue;
    }
    var parsedActivity = parseActivity(activity);
    parsedActivities.push(parsedActivity);
  }
  return parsedActivities;
}

function parseActivity(activity) {
  return {
    ...activity,
    role: activity.title,
    company: activity.institution,
    title: activity.project,
  };
}

const jobs = [...parseJobs(jobsData), ...parseActivities(activitiesData)];

export default jobs;
