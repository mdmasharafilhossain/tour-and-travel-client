import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import axios from "axios";


const MyService = () => {
    useEffect(()=>{
        document.title = "My Service"
      },[]);
    // const [Pera,setService] = useState([]);
    // const {user } = useContext(AuthContext);
    // const url = `https://tour-and-travel-server-f4rryndr0.vercel.app//${user?.email}`;
    //  console.log(user.email)
    // useEffect(()=>{
    //     axios.get(url)
    //     .then((res)=>{
    //         setService(res.data)
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching data:", error);
    //     });
    // },[])

    // console.log(Pera)
    return (
        <div>
            <h1>dd</h1>
        </div>
    );
};

export default MyService;