import Wrapper from "@/layouts/wrapper";
import HomeOne from "@/components/homes/home";
import HomeThree from "@/components/homes/home-3";

export const metadata = {
  title: "Softec - Data analytics"
};

const HomePage = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default HomePage;
