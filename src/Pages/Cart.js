import React, { useContext } from 'react';
import { ShopContext } from '../Components/Context/ShopContext';


const Cart = () => {
  const { all_product, cartItem, handleDeleteToCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className='cart-container'>
      <div className='cart-box'>
        {all_product.map((item) => {
          if (cartItem[item.id] > 0) {
            return (
              <div key={item.id} className='cart-key '>
                <div>
                <img src={item.image} alt={item.name} className='cart-image' />
                </div>
                <div className='cart-text'>
                <p className='cart-name text-2xl'>{item.name}</p>
                <div className='cart-price text-3xl mx-2 flex gap-5'>
                  <div className='cart-new'>${item.new_price}</div>
                  <div className='cart-old'>${item.old_price}</div>
                </div>
                <button className='cart-quantity'>Qty{cartItem[item.id]}</button>
                <p className='cart-save '>You save ${(item.old_price-item.new_price)*cartItem[item.id]}</p>  
                <hr className='bolder-t-2 '/>
                <button className='cart-button' onClick={() => { handleDeleteToCart(item.id) }}>Remove</button>
              </div>
              </div>
            );
          }
          return null; 
        })}
      <div className='cart-lists'>
        <div className='cart-total mb-4'>
          <h1>Order Details</h1>
        </div>
        <div className='cart-subtotal flex mx-2 mb-4'>
          <p>Bag Total</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <div className='cart-total-item flex mx-2 mb-4'>
          <p>Shipping Fees</p>
          <p className='cart-ship'>Free</p>
        </div>
        <hr className='cart-hr border-t-1 w-1/4 border-black mb-4'/>
        <div className='cart-final-total flex mx-2 font-bold mb-4'>
          <p>Amount Payable</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <button className='cart-proceed'>Proceed To Checkout</button>
      </div>        
      </div>
    </div>
  );
};

export default Cart;