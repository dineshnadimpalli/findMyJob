import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import "../App.css";

function Job({ job, onClick }) {
  return (
    <Paper onClick={onClick} className={"Job"}>
      <div className={"Job-card-content"}>
        <div>
          <img className={"company-logo-style"} src={job.company_logo} />
        </div>
        <Typography variant="h6">{job.title}</Typography>
        <Typography>{job.company}</Typography>
        <Typography style={{ color: "grey" }}>{job.location}</Typography>
      </div>
      <div>
        <Typography>
          {job.created_at
            .split(" ")
            .slice(0, 3)
            .join(" ")}
        </Typography>
      </div>
    </Paper>
  );
}

export default Job;
