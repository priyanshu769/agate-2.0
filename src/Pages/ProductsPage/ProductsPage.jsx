import React, { useState, useEffect } from 'react'
import './ProductsPage.css'
import { ProductCard } from '../../Components'
import axios from 'axios'

export const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(()=> {
    (async() => {
      try{
        const serverResponse = await axios.get('https://api-agate.herokuapp.com/products/')
        if (serverResponse.status===200) {
          setProducts(serverResponse.data.products)
        }
      } catch {
        console.log('Server response failed.')
      }
    })()
  }, [])

  return (
    <div className="productsContainer">
    {products.map(product => {
      return (
        <ProductCard
        productImg={product.image}
        productName={product.name.slice(0, 17)}
        productPrice={product.price}
        productCardBtnText="Add To Cart"
        wishListBtnStyle={false}
        />
      )
    })}
    </div>
  )
}
