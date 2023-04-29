import { FC } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsClockHistory, BsPersonFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";

interface NavbarMoreOptionsProps {
  setVisible: Function;
}



const NavbarMoreOptions: FC<NavbarMoreOptionsProps> = ({ setVisible }) => {
  return (
    <>
    <div className="NavbarMoreOptions" onMouseLeave={() => setVisible(false)}>
      <Link style={{textDecoration:"none",width:"100%"}} href="/cart" onClick={()=> setVisible(false)}>
        <div className="nav-options">
          <FaShoppingCart style={{ marginRight: "20px", fontSize: "23px" }} />
          <p>Cart</p>
        </div>
      </Link>

      <Link style={{textDecoration:"none",width:"100%"}} href="/account" onClick={()=> setVisible(false)}>
        <div className="nav-options">
          <BsPersonFill style={{ marginRight: "20px", fontSize: "25px" }} />
          <p>Account</p>
        </div>
      </Link>

      <Link style={{textDecoration:"none",width:"100%",}} href="/orderHistory" onClick={(e)=> {e.preventDefault();setVisible(false)}}>
        <div className="nav-options">
          <BsClockHistory style={{ marginRight: "20px",fontSize: "23px" }} />
          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column",padding:"0px"}}>
          <p>My Orders</p>
          <span style={{fontSize:"1rem",color:"red",marginTop:"5px"}}>Currently unavailable</span>
          </div>
        </div>
      </Link>

      <Link style={{textDecoration:"none",width:"100%"}} href={'/logout'} onClick={()=> setVisible(false)}>
      <div className="nav-options">
        <IoLogOut style={{ marginRight: "20px", fontSize: "23px" }} />
        <p>Logout</p>
      </div>
      </Link>
    </div>
    </>
  );
};

export default NavbarMoreOptions;
