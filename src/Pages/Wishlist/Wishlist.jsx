import React from 'react'
import './Wishlist.css'
import { ProductCard } from '../../Components'
import { useAuth } from '../../Context/AuthContext'

export const Wishlist = () => {
  const { auth } = useAuth()
  return (
    <div className="wishlistProductsContainer">
      {auth.user?.wishlist.map((wishedItem) => {
        return (
          <ProductCard
            productImg={wishedItem.image}
            productName={wishedItem.name}
            productPrice={wishedItem.price}
            productCardBtnText="Add To Cart"
            wishListBtnStyle={true}
          />
        )
      })}
    </div>
  )
}
