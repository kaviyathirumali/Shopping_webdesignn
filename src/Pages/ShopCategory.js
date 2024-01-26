import { useContext } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../Components/Context/ShopContext";

const ShopCategory = (props) => {  
  const {all_product} = useContext(ShopContext)         
  return (    
    <div className='shopcategory'>
      <div className="shop-banner">
        <img src={props.banner} alt=""/>
      </div>
      <div className="shop-footer-content">
          <p>Shopping 1-12 out of 36 products</p>
          <p className="flex gap-5 mr-2">Sort by <FaArrowDown size={20}/></p> 
      </div>
      <div className="shop-product">
        {all_product.map((item, i) => (
          props.category === item.category ? (
            <div className="shop-item" key={i}>
            <Link to={`/product/${item.id}`}><img src={item.image} alt=''/></Link>
              <p>{item.name}</p>
              <div className="shop-item-price gap-10 flex mr-2">
                <div className="shop-item-price-new font-bold">
                  ${item.new_price}
                </div>
                <div className="shop-item-price-old">
                  ${item.old_price}
                </div>
              </div>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;