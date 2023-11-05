import Banner from "../component/Banner";
import Category from "../component/Category";
import NewsLetter from "../component/NewsLetter";
import Statistics from "../component/Statistics";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Statistics></Statistics>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
