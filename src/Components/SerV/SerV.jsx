import { Link } from "react-router-dom";


const SerV = ({ serv }) => {
    const { _id,service_image, service_name, service_description, service_provider_image, service_provider_name, service_price, service_area } = serv
    
    const LimitDes = (description, limit) => {
        const words = description.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '.......';
        }
        return description;
    };

    const des = LimitDes(service_description, 20);
    return (
        <div>
            <div className="card w-72 h-[650px]  bg-base-100 shadow-2xl">
                <figure><img className="h-60 w-72"  src={service_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-bold text-2xl text-orange-600">{service_name}</h2>
                    <p className="text-justify">{des} <Link to={`serviceDetails/service/${_id}`}><button className="text-base font-bold text-orange-600">View Details</button></Link></p>
                    <div className="flex  mt-5">
                        <div>
                           <img  className="h-10 w-12" src={service_provider_image} alt="" />
                        </div>
                        <div>
                            <h1 className="ml-3  mt-2 text-orange-600 font-bold">{service_provider_name}</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="mt-2 font-bold text-base"><span className="font-bold text-orange-600">Area: </span> {service_area}</h1>
                    </div>
                    <div>
                        <h1 className="mt-2 font-bold text-base"><span className="font-bold text-orange-600">Price:</span> $ {service_price} only</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SerV;