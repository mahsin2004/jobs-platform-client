import { useEffect } from "react";
import Banner from "../component/Banner";
import Category from "../component/Category";
import ClientGuide from "../component/ClientGuide";
import EmployGuide from "../component/EmployGuide";
import NewsLetter from "../component/NewsLetter";
import Statistics from "../component/Statistics";

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Online Jobs'
  },[])
  return (
    <div className="bg-white dark:bg-black">
      <Banner></Banner>
      <Statistics></Statistics>
      <Category></Category>
      <ClientGuide></ClientGuide>
      <EmployGuide></EmployGuide>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
