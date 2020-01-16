import React from "react";
import { Typography } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Skeleton from "@material-ui/lab/Skeleton";
import Job from "./Job";
import JobModal from "./JobModal";

const Jobs = ({ jobs }) => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});

  const totalJobs = jobs.length;
  const offSet = 50;
  const totalPages = Math.ceil(totalJobs / offSet);
  const jobsOnPage = jobs.slice(
    (activeStep - 1) * 50,
    (activeStep - 1) * 50 + 50
  );
  //   console.log((activeStep - 1) * 50, (activeStep - 1) * 50 + 50);
  //   console.log(jobsOnPage);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={"Jobs"}>
      <Typography variant="h5" component="h1">
        Find your next Job here :)
      </Typography>
      <Typography variant="h6" style={{ color: "grey" }}>
        Found {totalJobs} for you
      </Typography>

      {jobsOnPage.length <= 0 ? (
        <div>
          {[1, 2, 3, 4, 5].map(num => 
            <Paper className={"JobSkeleton"}>
              <Skeleton variant="circle" width={40} height={40} />

              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Paper>
          )}
        </div>
      ) : (
        <div>
          {jobsOnPage.map((job, i) => (
            <Job
              key={i}
              job={job}
              onClick={() => {
                // console.log("-------Clicked-----");
                selectJob(job);
                handleClickOpen();
              }}
            />
          ))}
          <div>
            Page {activeStep} of {totalPages}
          </div>
          <MobileStepper
            variant="progress"
            steps={totalPages + 1}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === totalPages}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 1}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </div>
      )}

      <JobModal job={selectedJob} active={open} handleClose={handleClose} />
    </div>
  );
};

export default Jobs;
