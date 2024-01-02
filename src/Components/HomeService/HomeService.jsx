import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router-dom";


const HomeService = () => {
    const [card,setCard] = useState([]);
    const [showButton, setShowButton] = useState(true);
    useEffect(()=>{
        fetch('https://tour-and-travel-server.vercel.app/service')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[]);

    const handleButtonClick = () => {
        setShowButton(false);
    };

    return (
        <div className="">
            <h2 className="text-center text-orange-600   text-5xl font-bold mt-20 my-10">Our Services</h2>
            <div className="grid grid-cols-1  lg:mx-20   mt-20 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                card.slice(0,4).map(cards =><ServiceCard key={cards._id} cards={cards}></ServiceCard> )
            }
            </div>

            <div>
                {showButton && (
                    <div>
                        <Link to="/service">
                            <button
                                onClick={handleButtonClick}
                                className="btn btn-primary bg-orange-600 hover:bg-orange-700 text-white border-none mt-10 lg:ml-[900px]"
                            >
                                Show All
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeService;