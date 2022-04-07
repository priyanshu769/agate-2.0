import React from 'react'
import './Wishlist.css'
import { ProductCard } from '../../Components'
import { useAuth } from '../../Context/AuthContext'
import { useApp } from '../../Context/AppContext'
import { addToCarBtnStyle } from '../../Utils'

export const Wishlist = () => {
  const { auth } = useAuth()
  const { app } = useApp()
  return (
    <div className="wishlistProductsContainer">
      {auth.user?.wishlist.map((wishedItem) => {
        return (
          <ProductCard
            productImg={wishedItem.image}
            productName={wishedItem.name}
            productPrice={wishedItem.price}
            productCardBtnText={addToCarBtnStyle(wishedItem._id, app.cart)}
            wishListBtnStyle={true}
          />
        )
      })}
    </div>
  )
}
