import { useState,useContext } from "react";
import {BURGER_IMG} from "../utils/constants"
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import cart from "../Slices/cart";

const Header = () => {
  const status=useStatus()
  let [log,setLog]=useState("Login")

  const data= useContext(UserContext)
  console.log(data.loggedInStatus,"from header component")

  const cartItems=  useSelector((state)=>state.cart.data)

    return (

      <div className="flex items-center justify-between border-solid bg-orange-200 ">

        <div className="w-32 m-2 ml-4">
          <img
            src={BURGER_IMG}
            alt="App-Logo"
            className="logo"
          />
        </div>
  
        <div className=" ">
          <ul className="mr-8 border-solid  flex items-center justify-evenly gap-20 text-5xl ">

            <li>Online Status: {status?"🟢":"🔴"}</li>
            <Link to="/body"><li>Home</li></Link>
            <Link><li>Explore</li></Link>
            <Link to="/about" ><li>About</li></Link>
            <Link to="/contact" ><li>Contact</li></Link>
          <button className="text-lg" onClick={()=>{
          log==="Login"?setLog("Logout"):setLog("Login")
          }}>{log}</button>
          <Link to="/CartItems"><li>Cart: {cartItems.length}</li></Link>
          <li className="text-xl">{data.loggedInStatus}</li>
          </ul>
        </div>
      
      </div>
    );
  };

export default Header