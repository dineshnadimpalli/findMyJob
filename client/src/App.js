import React, { useEffect, useState } from "react";
import "./App.css";
import Jobs from "./components/Jobs";

const jobs = [
  {
    title: "SDE-I",
    company: "Google"
  },
  {
    title: "DevOps",
    company: "Microsoft"
  },
  {
    title: "SDET",
    company: "Facebook"
  },
  {
    title: "QA",
    company: "Walmart"
  },
  {
    title: "Developer",
    company: "PayTm"
  }
];

const JOBS_API = "http://localhost:8000/jobs";

async function fetchJobs(updateCb) {
  const res = await fetch(JOBS_API);
  // console.log("----res---", res)
  try {
    const json = await res.json();
    updateCb(json);
  } catch (e) {
    updateCb([]);
  }

  // console.log(json);
}

function App() {
  const [jobList, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
