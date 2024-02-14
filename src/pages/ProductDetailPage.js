import React from 'react'
import ProductDetail from '../features/product-list/Component/ProductDetail'
import NavBar from '../features/navbar/NavBar'

function ProductDetailPage() {
  return (
    <div>
        <NavBar>
        <ProductDetail></ProductDetail>
        </NavBar>
        
    </div>
  )
}

export default ProductDetailPage