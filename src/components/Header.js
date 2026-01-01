import { SITE_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header =() => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div className="flex justify-between  bg-pink-50 shadow-md">
            <div className="w-[100px]">
                <img src={SITE_LOGO} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 cursor-pointer">{onlineStatus ? "Online ✅" : "Offline 🔴"}</li>
                    <li className="px-4"> <Link to="/">Home</Link></li>
                    <li className="px-4"> <Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
                    <button 
                        className="login" 
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}>
                            {btnName}
                    </button>
                    <li className="px-4">{user}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;