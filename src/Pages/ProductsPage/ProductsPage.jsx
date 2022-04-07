import React, { useState, useEffect } from 'react'
import './ProductsPage.css'
import { ProductCard } from '../../Components'
import axios from 'axios'
import { useAuth } from '../../Context/AuthContext'
import { useApp } from '../../Context/AppContext'
import { wishListBtnStyle, addToCarBtnStyle,addTocartHandle } from '../../Utils'
import { useNavigate } from 'react-router'

export const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const { auth } = useAuth()
  const { app, appDispatch } = useApp()
  const navigate = useNavigate()
  console.log(products[0])
  useEffect(() => {
    ;(async () => {
      try {
        const serverResponse = await axios.get(
          'https://api-agate.herokuapp.com/products/',
        )
        if (serverResponse.status === 200) {
          setProducts(serverResponse.data.products)
        }
      } catch (error) {
        console.log('Server response failed.', error)
      }
    })()
  }, [])

  return (
    <div className="productsContainer">
      {products.map((product) => {
        return (
          <ProductCard
            productImg={product.image}
            productName={product.name.slice(0, 17)}
            productPrice={product.price}
            addToCartHandle={() => 
              addTocartHandle(
                product._id,
                auth.loggedInToken,
                appDispatch,
                navigate,
              )
            }
            productCardBtnText={addToCarBtnStyle(product._id, app.cart)}
            wishListBtnStyle={wishListBtnStyle(product._id, auth.user)}
          />
        )
      })}
    </div>
  )
}
