import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobModal({ job, active, handleClose }) {
  if (!job) {
    return <div />;
  }

  return (
    <div>
      <Dialog
        open={active}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <div className="DialogBoxJobHeading">
            <div>
              <img className={"company-logo-style"} src={job.company_logo} />
            </div>
            <div className="DialogBoxJobTitle">
              {job.title} - {job.company}
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <div>
            <a href={job.url} target="_blank">
              <Button onClick={handleClose} color="primary">
                Apply
              </Button>
            </a>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
