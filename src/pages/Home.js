import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductList from '../features/product/Component/ProductList'

function Home() {
  return (
    <div>
        <NavBar>
            <ProductList />
        </NavBar>
    </div>
  )
}

export default Home