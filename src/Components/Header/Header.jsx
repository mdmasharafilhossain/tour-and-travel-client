import { NavLink } from "react-router-dom";
import logo from '../../assets/t-01-01.jpg'

const Header = () => {

    const NavLinks = <>
        <li><NavLink
            to="/" style={{ fontWeight: "bold", fontSize: "25px",}}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/service" style={{ fontWeight: "bold", fontSize: "25px",}}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
        >
            Service
        </NavLink></li>

        <details className="dropdown">
            <summary className="m-1  text-2xl  font-bold  hover:none">DashBoard</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>My-Services</a></li>
                <li><a>Add-Services</a></li>
                <li><a>My-Schedules</a></li>
            </ul>
        </details>


    </>

    return (
        <div>
            <div className="shadow-lg">
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
                    <div className="navbar-end">
                        <a className="btn">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;