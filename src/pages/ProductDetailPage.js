import React from 'react'
import ProductDetail from '../features/product/Component/ProductDetail'
import NavBar from '../features/navbar/NavBar'
import Footer from "../features/common/Footer";


function ProductDetailPage() {
  return (
    <div>
        <NavBar>
        <ProductDetail></ProductDetail>
        </NavBar>
        <Footer></Footer>
    </div>
  )
}

export default ProductDetailPage