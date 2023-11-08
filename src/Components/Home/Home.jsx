
import Customer from "../Customer/Customer";
import Footer from "../Footer/Footer";
import HomeService from "../HomeService/HomeService";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mt-16">
           <Banner></Banner>
           <HomeService></HomeService>
           <Customer></Customer>
           <Footer></Footer>
        </div>
    );
};

export default Home;