import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import Swal from "sweetalert2";

const AddService = () => {
    const { user } = useContext(AuthContext);
    const handleAddService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const UserEmail = user?.email;
        const ServiceName = form.serviceName.value;
       const Price = form.price.value;
        const Des = form.des.value;
        const ServiceArea = form.area.value;
        const Image = form.img.value;

        const AddNewService = {name,UserEmail,ServiceName,Price,Des,ServiceArea,Image}
        console.log(AddNewService);
        fetch('http://localhost:5000/service',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(AddNewService)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Add Service',
                    text: 'Service Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div>
           <div className="mt-40">
                <h2 className="font-bold   text-orange-500  text-5xl text-center mt-16 py-5 mb-10  ">Add Service</h2>
                <form onSubmit={handleAddService}  className="container mx-auto">
                    {/* For Name And Brand Name */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Name" readOnly defaultValue={user?.displayName} name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Service Name" name="serviceName" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* For Type And Price */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                    <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Name" readOnly defaultValue={user?.email} name="email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Product Price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* For Rating And Brand Name */}
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="form-control w-3/4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                
                                <input type="text" placeholder="Short description" name="des" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/4 md:w-1/2">
      <label className="label">
        <span className="label-text">Service Area</span>
      </label>
      <label className="input-group">
                                
                                <input type="text" placeholder="Service Area" name="area" className="input input-bordered w-full" />
                            </label>
      
    </div>
                    </div>
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                
                                <input type="text" placeholder="Image URL" name="img" className="input input-bordered w-full" />
                            </label>
                        </div>

                   <input type="submit" value="Add Service " className="btn btn-block mt-10 text-white bg-orange-600 hover:bg-orange-700"/>
                </form>
            </div> 
        </div>
    );
};

export default AddService;