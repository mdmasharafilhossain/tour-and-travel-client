import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
    }
    return (
        <div>
             <div className=" py-60">
            <div className="mt-[100px] md:mt-10 lg:mt-10 text-center   py-5">
                <h2 className="text-4xl font-bold text-orange-600">Please login</h2>

                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                        name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-orange-500 border-none font-bold text-white text-base hover:bg-orange-600">Login</button>
                        
                       
                    </div>
                </form>
                <p className="font-bold mt-5 text-xl text-orange-500">OR</p>
                {/* <button onClick={hadleGoogleLogin} className="btn btn-primary bg-green-700 hover:bg-green-900 text-white">Google Login</button>
                {
                    errorMessage && <p className="text-sm font-bold text-red-700">{errorMessage}</p>
                } */}
                <p className="text-xl mt-10">New Here?Please <Link to="/register" className="font-bold text-orange-600">Register</Link></p>
            </div>








        </div> 
        </div>
    );
};

export default Login;