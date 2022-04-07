import React from 'react'
import './Wishlist.css'
import { ProductCard } from '../../Components'
import { useAuth } from '../../Context/AuthContext'
import { useApp } from '../../Context/AppContext'
import { addToCarBtnStyle } from '../../Utils'
import { useNavigate } from 'react-router'
import { addTocartHandle } from '../../Utils'

export const Wishlist = () => {
  const { auth } = useAuth()
  const { app, appDispatch } = useApp()
  const navigate = useNavigate()
  return (
    <div className="wishlistProductsContainer">
      {auth.user?.wishlist.map((wishedItem) => {
        return (
          <ProductCard
            productImg={wishedItem.image}
            productName={wishedItem.name}
            productPrice={wishedItem.price}
            addToCartHandle={() =>
              addTocartHandle(
                wishedItem._id,
                auth.loggedInToken,
                appDispatch,
                navigate,
              )
            }
            productCardBtnText={addToCarBtnStyle(wishedItem._id, app.cart)}
            wishListBtnStyle={true}
          />
        )
      })}
    </div>
  )
}
