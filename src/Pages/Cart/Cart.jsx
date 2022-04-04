import React from 'react'
import './Cart.css'
import { CartProductCard } from '../../Components/CartProductCard/CartProductCard'

export const Cart = () => {
  return (
    <div>
    <h2 className='cartHeading'>Your Cart:</h2>
    <div className='cartProductsAndDetails'>
    <div className='cartProductsContainer'>
    <CartProductCard
      productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName='Rahiman Dhaga Prem'
        productPrice={2999}
        wishListBtnStyle={false}
        />
      <CartProductCard
      productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName='Rahiman Dhaga Prem Ka'
        productPrice={2999}
        wishListBtnStyle={false}
         />
      <CartProductCard
      productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName='Rahiman Dhaga Prem'
        productPrice={2999}
        wishListBtnStyle={false}
         />
         </div>
         <div className='cartDetails'>
         <h3>Order Summary:</h3>
         <p>Total Quantity: </p>
         <p>Total:</p>
         <p><i>Delivery expected in 6 to 7 days.</i></p>
         <button className='paymentBtn'>Proceed To Pay</button>
         </div>
         </div>
    </div>
    )
}
