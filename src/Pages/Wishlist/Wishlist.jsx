import React from 'react'
import './Wishlist.css'
import { ProductCard } from '../../Components'

export const Wishlist = () => {
  return (
    <div className='wishlistProductsContainer'>
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName='Product Ka Naam'
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
      />
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName='Product Ka Naam'
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
      />
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName='Product Ka Naam'
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
      />
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName='Product Ka Naam'
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
      />
    </div>
  )
}
