import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {MdShoppingBasket} from 'react-icons/md';
import { ShopContext } from "../Components/Context/ShopContext";

const Navbar=()=>{
    const[menu,setMenu]=useState("shop");
    const {getTotalCartItem }=useContext(ShopContext)
    return(
        <div className="navbar">
            <div className="nav-logo ">
            <MdShoppingBasket className="text-4xl text-red-500"/>
            <p className="bg-black-300 text-3xl font-bold">SHOPPING</p>
            </div>
            <ul className="nav-menu flex space-x-5">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart flex mr-2">
                <Link to='/login'><button className="rounded font-bold py-2 px-4 border border-black-500 hover:bg-lightgray-700">Login</button></Link>
                <Link to='/cart'><AiOutlineShoppingCart className="text-5xl absolute top-2 right-12 "/></Link>
            </div>
            <div className="nav-cart-count absolute top-0 right-11">{getTotalCartItem()}</div>
        </div>
    )
}
export default Navbar;