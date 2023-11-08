
import AboutUs from "../AboutUS/AboutUs";
import Customer from "../Customer/Customer";
import Footer from "../Footer/Footer";
import HomeService from "../HomeService/HomeService";
import Special from "../Special/Special";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mt-16">
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Special></Special>
           <HomeService></HomeService>
           <Customer></Customer>
           <Footer></Footer>
        </div>
    );
};

export default Home;