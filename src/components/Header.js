import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import CartIcon from "./Icons/CartIcon";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="mx-auto h-20 flex justify-between py-6 px-4  items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
      <div className="flex items-center">
        <img className="hidden md:block w-16 " src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 font-medium text-xl ">
          <li className="px-4">onlineStatus: {onlineStatus ? "✅" : "🔴 "}</li>
          <li className="px-4 hover:text-red-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-red-700">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 hover:text-red-700">
            <Link to="/about">About us</Link>
          </li>
         
          <li className="px-4 hover:text-red-700">
            
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            {/* <Link to="/cart" className="flex">
              <CartIcon />({cartItems.length})
            </Link> */}
          </li>
          <button
            className="login-btn hover:text-red-700"
            onClick={() => {
              btnName === "Login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">
            <Link className="font-bold" to="">
              {loggedInUser}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
