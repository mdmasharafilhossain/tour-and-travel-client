import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/t-01-01.jpg'
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then()
            .catch()
    }

    const NavLinks = <>
        <li><NavLink
            to="/" style={{ fontWeight: "bold", fontSize: "25px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/service" style={{ fontWeight: "bold", fontSize: "25px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 underline" : ""
            }
        >
            Service
        </NavLink></li>

        <details className="dropdown">
            <summary className="m-1  text-2xl   font-bold  hover:none">DashBoard</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><NavLink
            to="/MyService" style={{ fontWeight: "bold", fontSize: "15px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 " : ""
            }
        >
             My-services
        </NavLink></li>
                <li><NavLink
            to="/AddService" style={{ fontWeight: "bold", fontSize: "15px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 " : ""
            }
        >
             Add-services
        </NavLink></li>
                <li><NavLink
            to="/MySchedules" style={{ fontWeight: "bold", fontSize: "15px", }}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-600 " : ""
            }
        >
            My-schedules
        </NavLink></li>
            </ul>
        </details>


    </>

    return (
        <div>
            <div className="shadow-lg bg-base-100 fixed top-0 left-0 right-0 z-50">
                <div className="navbar bg-base-100 container mx-auto ">
                    <div className="navbar-start  ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {NavLinks}
                            </ul>
                        </div>
                        <img className="h-10" src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="navbar-end flex">

                        <div>
                            <h2 className="mt-4 text-xl font-bold text-orange-600-600">{user?.displayName

                            }</h2>
                        </div>
                        <div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full mt-3">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                        </div>
                        <div>
                            {
                                user ?
                                    <button onClick={handleLogOut} className=" text-orange-600 border-4 border-orange-500
                        hover:bg-orange-100 font-bold text-xl px-4 py-2 rounded-xl">Sign Out</button>

                                    :

                                    <Link to="/login"><button className=" text-orange-600 border-4 border-orange-500
                        hover:bg-orange-100 font-bold text-xl px-4 py-2 rounded-xl">Sign In</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;