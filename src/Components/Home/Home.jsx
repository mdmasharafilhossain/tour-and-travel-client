
import AboutUs from "../AboutUS/AboutUs";
import Customer from "../Customer/Customer";
import Footer from "../Footer/Footer";
import HomeService from "../HomeService/HomeService";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mt-16">
           <Banner></Banner>
           <AboutUs></AboutUs>
           <HomeService></HomeService>
           <Customer></Customer>
           <Footer></Footer>
        </div>
    );
};

export default Home;