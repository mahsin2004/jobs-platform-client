import Banner from "../component/Banner";
import Category from "../component/Category";
import ClientGuide from "../component/ClientGuide";
import EmployGuide from "../component/EmployGuide";
import NewsLetter from "../component/NewsLetter";
import Statistics from "../component/Statistics";

const Home = () => {
  return (
    <div>
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
