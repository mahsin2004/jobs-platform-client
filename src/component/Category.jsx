
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import AllJobs from "../filterJobs/AllJobs";
import Remote from "../filterJobs/Remote";
import Onsite from "../filterJobs/Onsite";
import Hybrid from "../filterJobs/Hybrid";
import PartTime from "../filterJobs/PartTime";

const Category = () => {

  return (
    <div className="max-w-[1440px] px-6 lg:px-10 mx-auto py-14">
      <div className="text-2xl lg:text-[42px] text-gray-700 lg:mb-8 font-semibold">
        <h1>Jobs Category</h1>
      </div>
      <Tabs>
        <TabList className="space-y-1 lg:flex gap-6 items-center mb-6">
          <Tab className="rounded-md  bg-gray-600 text-white px-4 py-2">
            <Link>All Jobs</Link>
          </Tab>
          <Tab className=" rounded-md bg-gray-600 text-white px-4 py-2">
            <Link>Remote</Link>
          </Tab>
          <Tab className="rounded-md bg-gray-600 text-white px-4 py-2">
            <Link>On Site</Link>
          </Tab>
          <Tab className="rounded-md  bg-gray-600 text-white px-4 py-2">
            <Link>Hybrid</Link>
          </Tab>
          <Tab className="rounded-md  bg-gray-600 text-white px-4 py-2">
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
