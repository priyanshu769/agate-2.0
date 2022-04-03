import React, { useState } from 'react'
import './ProductsPage.css'
import { ProductCard } from '../../Components'

export const ProductsPage = () => {
  const [productName, setProductName] = useState("Product's Name Even If It's Big")
  return (
    <div className="productsContainer">
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName={productName.slice(0, 17)}
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
      />
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName={productName.slice(0, 17)}
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
      />
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName={productName.slice(0, 17)}
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={true}
      />
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName={productName.slice(0, 17)}
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={true}
      />
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName={productName.slice(0, 17)}
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
      />
      <ProductCard
        productImg="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
        productName={productName.slice(0, 17)}
        productPrice={2999}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
      />
    </div>
  )
}
