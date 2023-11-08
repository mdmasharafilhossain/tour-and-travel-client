import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const CardsInfo = useLoaderData();
    console.log(CardsInfo);
    const { _id } = useParams();
    const InfoCard = CardsInfo.find(brand => brand._id === _id);
    return (
        <div>
            <div className="mt-[600px] lg:mt-60 mb-24">


             {/* service provider info  */}

                <div className="mb-10">
                <img className="mx-auto" src={InfoCard.service_provider_image} alt="" />
                    <h1 className="text-2xl text-orange-600 text-center font-bold ">Service Provider Name : {InfoCard.service_provider_name}</h1>
                    <h1 className="text-2xl text-orange-600 text-center font-bold ">Location : {InfoCard.service_area}</h1>
                    
                </div>


                <div className="flex flex-col md:flex-row lg:flex-row  mx-20 gap-20">
                    <div className="flex-1">
                        <img className="h-[550px] w-[3000px] " src={InfoCard.service_image} alt="" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold  text-orange-500  mt-32 mb-5">{InfoCard.service_name}</h1>
                        <h1 className="text-justify  text-xl mb-5">{InfoCard.service_description}</h1>

                        <p className="text-4xl font-bold  text-orange-500">$ {InfoCard.service_price} Only</p>
                        <button

                            className="btn btn-primary px-[150px] w-full bg-orange-500 hover:bg-orange-600 text-white border-none mt-20">Book Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;