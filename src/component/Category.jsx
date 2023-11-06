import { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import AllJobs from "../filterJobs/AllJobs";
import Remote from "../filterJobs/Remote";
import Onsite from "../filterJobs/Onsite";
import Hybrid from "../filterJobs/Hybrid";
import PartTime from "../filterJobs/PartTime";

const Category = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("https://jobs-platform-server.vercel.app/jobs").then((res) => {
      setJobs(res.data);
      console.log(res);
    });
  }, []);
  console.log(jobs);

  return (
    <div className="max-w-[1440px] px-4 lg:px-10 mx-auto py-14">
      <div className="text-[42px] mb-2 font-medium">
        <h1>Jobs Category</h1>
      </div>
      <Tabs>
        <TabList className="flex gap-6 items-center mb-6">
          <Tab className="outline-none rounded-t-md border-sky-400 border px-5 py-2">
            <Link>All Jobs</Link>
          </Tab>
          <Tab className="outline-none rounded-t-md border-sky-400 border px-5 py-2">
            <Link>Remote</Link>
          </Tab>
          <Tab className="outline-none rounded-t-md border-sky-400 border px-5 py-2">
            <Link>On Site</Link>
          </Tab>
          <Tab className="outline-none rounded-t-md border-sky-400 border px-5 py-2">
            <Link>Hybrid</Link>
          </Tab>
          <Tab className="outline-none rounded-t-md border-sky-400 border px-5 py-2">
            <Link>Part Time</Link>
          </Tab>
        </TabList>

        <TabPanel>
          <h2><AllJobs></AllJobs></h2>
        </TabPanel>
        <TabPanel>
          <h2><Remote></Remote></h2>
        </TabPanel>
        <TabPanel>
          <h2><Onsite></Onsite></h2>
        </TabPanel>
        <TabPanel>
          <h2><Hybrid></Hybrid></h2>
        </TabPanel>
        <TabPanel>
          <h2><PartTime></PartTime></h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
