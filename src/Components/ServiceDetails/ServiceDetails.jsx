import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";
import Swal from "sweetalert2";


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const CardsInfo = useLoaderData();
    console.log(CardsInfo);
    const { _id } = useParams();
    const InfoCard = CardsInfo.find(brand => brand._id === _id);


    const handleBookProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const ServiceEmail = form.serviceEmail.value;
        const UserEmail = user?.email;
        const Price = form.price.value;
        
        const date = form.date.value;
        const Image = form.img.value;
        const Instruction = form.ins.value;

        const BookProducts = {name,ServiceEmail,UserEmail,Price,date,Image,Instruction}
        console.log(BookProducts);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(BookProducts)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("booking Successfully")
            }
        })
    }

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
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-primary px-[150px] w-full bg-orange-500 hover:bg-orange-600 text-white border-none mt-20" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                            <div className="">
                <h2 className="font-bold  bg-orange-100 text-orange-500  text-5xl text-center mt-16 py-5 mb-10  ">Booking</h2>
                <form onSubmit={handleBookProduct}  className="container mx-auto">
                    {/* For Name And Brand Name */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Name" defaultValue={InfoCard.service_name} readOnly name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Provider Email</span>
                            </label>
                            <label className="input-group">

                                <input type="text" readOnly defaultValue={InfoCard.service_email} placeholder="Service Provider Email" name="serviceEmail" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* For Type And Price */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="User Email" name="UserEmail" readOnly defaultValue={user?.email} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" readOnly defaultValue={InfoCard.service_price} placeholder="Product Price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* For Rating And Brand Name */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Special Instruction</span>
                            </label>
                            <label className="input-group">
                                
                                <input type="text" placeholder="Instructions" name="ins" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
      <label className="label">
        <span className="label-text">Service Date</span>
      </label>
      <label className="input-group">
                                
                                <input type="date" placeholder="" name="date" className="input input-bordered w-full" />
                            </label>
      
    </div>
                    </div>
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Service Image</span>
                            </label>
                            <label className="input-group">
                                
                                <input type="text" readOnly defaultValue={InfoCard.service_image} placeholder="Image URL" name="img" className="input input-bordered w-full" />
                            </label>
                        </div>
                    {/* <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Special Instruction</span>
                            </label>
                            <label className="input-group">
                                
                                <input type="text" placeholder="Instructions" name="ins" className="input input-bordered w-full" />
                            </label>
                        </div> */}

                   <input  type="submit" value="Book Now " className="btn btn-block mt-10 text-white bg-orange-600 hover:bg-orange-700"/>
                </form>
            </div>
            <div className="">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn  btn-block mt-10 text-white bg-orange-600 hover:bg-orange-700">Close</button>
      </form>
    </div>
            
                            </div>
                        </dialog>
                        
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;