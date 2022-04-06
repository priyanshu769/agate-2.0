import React from 'react'
import './Cart.css'
import { CartProductCard } from '../../Components'
import { useApp } from '../../Context/AppContext'
import { wishListBtnStyle } from '../../Utils'
import { useAuth } from '../../Context/AuthContext'

export const Cart = () => {
  const { auth } = useAuth()
  const { app } = useApp()
  return (
    <div>
      <h2 className="cartHeading">Your Cart:</h2>
      <div className="cartProductsAndDetails">
        <div className="cartProductsContainer">
          {app.cart?.map((cartItem) => {
            return (
              <CartProductCard
                productImg={cartItem.product.image}
                productName={cartItem.product.name}
                productPrice={cartItem.product.price}
                wishListBtnStyle={wishListBtnStyle(
                  cartItem.product._id,
                  auth.user,
                )}
              />
            )
          })}
        </div>
        <div className="cartDetails">
          <h3>Order Summary:</h3>
          <p>Total Quantity: </p>
          <p>Total:</p>
          <p>
            <i>Delivery expected in 6 to 7 days.</i>
          </p>
          <button className="paymentBtn">Proceed To Pay</button>
        </div>
      </div>
    </div>
  )
}
