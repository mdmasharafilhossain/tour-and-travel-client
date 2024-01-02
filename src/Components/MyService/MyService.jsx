import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import axios from "axios";


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
        <div className="mt-20">
           <h1>length :{Service.length}</h1>
        </div>
    );
};

export default MyService;