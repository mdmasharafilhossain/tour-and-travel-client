
import HomeService from "../HomeService/HomeService";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mt-16">
           <Banner></Banner>
           <HomeService></HomeService>
          
        </div>
    );
};

export default Home;