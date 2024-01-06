import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import axios from "axios";
import MyScheduleDetails from "./MyScheduleDetails/MyScheduleDetails";


const MySchedule = () => {
    useEffect(()=>{
        document.title = "Travel | My Schedule"
      },[]);
      const [Service,setService] = useState([]);
      const {user} = useContext(AuthContext)
      const url = `http://localhost:5000/booking/search/${user?.email}`;
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
        <div className="mt-28">
            <h1 className="text-center text-4xl font-bold text-orange-600">My  Total Schedules : 
                {Service.length}
            </h1>
            {Service.length === 0 ? (
                <p className="text-center text-red-600 mt-60 text-6xl font-semibold">
                    No Schedule Available!!!!
                </p>
            ) : (
                <div className="grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-20 mb-20">
                    {Service.map((myShe) => (
                        <MyScheduleDetails key={myShe._id} myShe={myShe}></MyScheduleDetails>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MySchedule;