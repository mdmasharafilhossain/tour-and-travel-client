import { useEffect, useState } from "react";
import SerV from "../SerV/SerV";


const Service = () => {
    useEffect(()=>{
        document.title = "Service"
      },[]);
    const [card,setCard] = useState([]);
    useEffect(()=>{
        fetch('https://tour-and-travel-server-czvxnqy0j.vercel.app/service')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div>
           <h2 className="text-center text-orange-600    text-5xl font-bold lg:mt-32 my-10">All Services</h2>
            <div className="grid grid-cols-2 mx-5 mt-20 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {
                card.map(serv => <SerV key={serv._id} serv={serv}></SerV>)
            }
            </div>
        </div>
    );
};

export default Service;