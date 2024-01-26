import { useParams } from 'react-router-dom';
import './Pages.css';
import {IoIosArrowForward} from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import {ShopContext} from '../Components/Context/ShopContext';
import { Link } from 'react-router-dom';

const Product=()=>{
    const {all_product, handleAddToCart} = useContext(ShopContext)  
    const {productId}=useParams();
    const [product,setProduct]=useState({});
    
    useEffect(()=>{
        window.scrollTo({top:0, behavior: 'smooth'})
        const selectedProduct=all_product.find((e)=>e.id===Number(productId));
        setProduct(selectedProduct||{});
    }, [productId, all_product]);

    const handleRelatedImage=(clickedProductId)=>{
        window.scrollTo({top:0, behavior: 'smooth'})
        const selectedProduct=all_product.find((e)=>e.id===clickedProductId);
        setProduct(selectedProduct||{});
    }
    return(
        <div className='product-folder'>
        <div className="product ">
            <div className='product-head '>            
                <p className='product-para'>
                    <span>HOME</span>
                    <IoIosArrowForward  size={20}/>
                    <span>SHOP</span>
                    <IoIosArrowForward  size={20}/>
                    <span>{product.category}</span>
                    <IoIosArrowForward  size={20}/>
                    <span>{product.name}</span></p>     
                    <img src={product.image} alt=""/>
            </div>
            <div className='product-right flex flex-col space-y-7 w-[600px]'>           
                <h1 className='text-3xl'>{product.name}</h1>
                <div className='product-right-star flex mx-6'>
                <FaStar  color="gold" size={20}/>
                <FaStar  color="gold" size={20}/>
                <FaStar  color="gold" size={20}/>
                <FaStar  color="gold" size={20}/>
                <FaStar  size={20}/>
                <p className='mx-6'>(122)</p>
                </div>
                <div className='product-right-price flex mx-2 gap-10'>
                    <h1 className='old'>${product.old_price}</h1>
                    <h1 className='new'>${product.new_price}</h1>
                </div>
                <div className='product-right-text'>
                    <p>A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves, worn as an undershirt or outer garment</p>
                </div>
                <div className='product-right-size-text font-bold'>
                    <h1>Select Size</h1>
                </div>
                <div className='product-right-size flex gap-3'>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                </div>
                <div className='product-right-cart'>
               <Link to="/cart"><button onClick={()=>{handleAddToCart(product.id)}}>ADD TO CART</button></Link>
                </div>
                <div className='product-right-content'>
                    <h1 className='flex mx-2 '>Category :<p>Women, T-Shirt Crop Top</p></h1>
                    <h1 className='flex mx-2 '>Tags :<p>Modern, Latest</p></h1>
                </div>
            </div>
        </div>
        <br/>
        <div className='product-footer-content'>
            <div className='product-footer-button flex mr-2'>
                <button className='product-footer-box1'>Description</button>
                <button className='product-footer-box2'>Reviews (122)</button>
            </div>
            <div className='product-footer-para'>
            <p className='product-footer-paragraph'>
                An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and Individuals con showcase their products, Interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
            <br/>
                E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (eg, sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
            </div>
        </div>
    
        <div className='product-related'>
            <h1>RELATED COLLECTIONS</h1>
            <hr/>
        <div className="product-related-content">
        {all_product.map((item, i) => (
          product.category === item.category ? (
            <div className="product-item" key={i}>
                <img src={item.image} onClick={()=>handleRelatedImage(item.id)} alt=" "/>
                <p>{item.name}</p>
                <div className="product-item-price flex mr-2 gap-10">
                    <div className="product-item-price-new font-bold">
                        ${item.new_price}
                    </div>
                    <div className="product-item-price-old">
                        ${item.old_price}
                    </div>
                </div>
            </div>
          ) : null
        ))}
      </div>
    </div>  
    </div>
    );
};
export default Product;