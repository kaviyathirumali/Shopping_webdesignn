import React from 'react';
import data_product from '../Components/Assets/data';
import exclusive_image from "../Components/Assets/exclusive_image.png";
import new_collection from '../Components/Assets/new_collections';
import {IoIosArrowForward} from 'react-icons/io';
import hero_image from '../Components/Assets/hero_image.png';
import { Link } from 'react-router-dom';

const Shop =()=>{

    return(
        <div>
        <div className="landing-page grid grid-cols-2  h-screen bg-gradient-to-t from-pink-100 to-pink-300">
            <div className='landing'>
            <p className='landing-p1'>NEW ARRIVALS ONLY</p>
            <p className='landing-p2'>new</p>
            <p className='landing-p2'>collections</p>
            <p className='landing-p2'>for everyone</p><br/>
            <button className='grid grid-cols-2 '>Latest Collection<IoIosArrowForward size={24}/></button>
            </div>
            <div className='landing-img'>
               <img src={hero_image} alt=""/>
            </div>
        </div>
        <div className='popular'>
            <h1>POPULAR IN WOMENS</h1>
            <hr />
            <div className='popular-item'>
                {data_product.map((item,i)=>(
                    <div className="popular-item-key" key={i}>
                        <Link to={`/product/${item.id}`}><img src={item.image} alt={item.name}/></Link>
                        <p>{item.name}</p>
                        <div className="popular-item-price gap-10  flex mr-2">
                            <div className="popular-item-price-new font-bold">
                            ${item.new_price}
                        </div>
                        <div className="popular-item-price-old">
                            ${item.old_price}
                    </div>
                </div>
            </div>    
            ))}
            </div>
        </div>
        <div className="offers grid grid-cols-2 h-screen bg-gradient-to-t from-pink-100 to-pink-300 ">
            <div className="offers-left">
                <h1 className="offers-p2">Exclusive</h1>
                <h1 className="offers-p2">Offers For You</h1><br/>
                <p className="offers-p1">ONLY ON BEST SELLERS PRODUCTS</p><br/>
                <button >Check Now</button>
            </div>
            <div className="offers-right ">
                <img src={exclusive_image}  alt=""/>
            </div>
        </div>    
        <div className='new-collection'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='newcollection-item'>
                {new_collection.map((item,i)=>(
                    <div className="new-item" key={i}>
                        <Link to={`/product/${item.id}`}><img src={item.image} alt=''/></Link>
                        <p>{item.name}</p>
                        <div className="newitem-price gap-10 flex mr-2">
                            <div className="newitem-price-new font-bold">
                            ${item.new_price}
                        </div>
                        <div className="newitem-price-old">
                            ${item.old_price}
                    </div>
                </div>
            </div>    
            ))}
            </div>
        </div>
        </div>
    )
}
export default Shop;