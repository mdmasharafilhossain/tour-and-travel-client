import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import axios from "axios";
import MyServiceDetails from "./MyServiceDetails/MyServiceDetails";


const MyService = () => {
    
    useEffect(()=>{
        document.title = "Travel | My Service"
      },[]);
    const [Service,setService] = useState([]);
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/service/search/${user?.email}`;
     console.log(user.email)
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setService(res.data)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    },[url]);


    console.log(Service)
    return (
        <div className="mt-20 mb-20">
           <h1 className="text-3xl font-bold text-orange-600 mt-28 mb-20 text-center">Your Added Service :{Service.length}</h1>
            
            
           {Service.length === 0 ? (
                <p className="text-center text-red-600 mt-60 text-6xl font-semibold">
                    No Services Available!!!!
                </p>
            ) : (
                <div className="grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {Service.map((mySer) => (
                        <MyServiceDetails key={mySer._id} mySer={mySer} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyService;