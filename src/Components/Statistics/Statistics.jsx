
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Statistics = () => {
    const [card,setCard] = useState([]);
    const [service,setService] = useState([]);
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch('https://tour-and-travel-server-czvxnqy0j.vercel.app/service')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[]);
    const url = `https://tour-and-travel-server-czvxnqy0j.vercel.app/service/search/${user?.email}`;
    console.log(user.email)
   useEffect(()=>{
       axios.get(url).then((res)=>{
           setService(res.data)
       })
       .catch((error) => {
           console.error("Error fetching data:", error);
       });
   },[url])
    const data = [
        ["Task", "Hours per Day"],
        ["Total ", card.length],
        ["Your Contribution", service.length],
        
      ];
      
     
      
    return (
        <div className="mt-28">
           <h2 className="font-bold   text-orange-500  text-5xl text-center mt-16 py-5 mb-10  ">Statistics of your Contribution</h2>
           
           <Chart
      chartType="PieChart"
      data={data}
      
      width={"100%"}
      height={"800px"}
    />

    <h2 className="text-2xl font-bold mb-20">Thanks For Your Contribution!!!!!!!</h2>
        </div>
    );
};

export default Statistics;