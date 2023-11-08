import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";


const MyService = () => {
    const [service,setService] = useState([]);
    const {user } = useContext(AuthContext);
    const url = `http://localhost:5000/service/${user?.email}`

    
    return (
        <div>
            <h1>dd</h1>
        </div>
    );
};

export default MyService;