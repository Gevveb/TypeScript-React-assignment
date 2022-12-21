import React, { useContext } from 'react'
import { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContextType, useProductContext } from '../Contexts/ProductContext'



const ProductsView: React.FC= () => {

  const {allProducts, getAllProducts }= useProductContext() as ProductContextType

  useEffect(() => {
    getAllProducts()
  
  }, [])
  

  return (
    <div>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={allProducts}/>
    </div>
    
  )
}

export default ProductsView