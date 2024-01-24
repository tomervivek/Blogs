import HeaderSection from "../Components/HeaderSection";
import HomePageComp from "../Components/HomePageComp";

function Home() {
  return (
    <div>
      <HeaderSection>
        <div>
          <img src="/education.jpg" className="h-[200px] object-cover sm:h-full" />
        </div>
        <div className="sm:my-12 my-8">
          <HomePageComp />
        </div>
      </HeaderSection>
    </div>
  );
}
export default Home;
