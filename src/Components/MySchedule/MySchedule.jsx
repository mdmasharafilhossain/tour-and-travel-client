import { useEffect } from "react";


const MySchedule = () => {
    useEffect(()=>{
        document.title = "My Schedule"
      },[]);
    return (
        <div>
            <h1>My Shedulee</h1>
        </div>
    );
};

export default MySchedule;