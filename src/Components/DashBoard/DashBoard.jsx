import { useEffect } from "react";

const DashBoard = () => {
    useEffect(()=>{
        document.title = "Travel | Dashboard"
      },[]);
    return (
        <div>
            <h1>DashBoard</h1>
        </div>
    );
};

export default DashBoard;