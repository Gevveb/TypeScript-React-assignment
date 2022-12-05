import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModels'

interface ProductGridSectionType {
  title: string
  items: ProductItem[]
}

const ProductGridSection: React.FC<ProductGridSectionType> = ({title, items = [] }) => {
  return (
    
    <section className="__featured-products">
        <div className="container">
            <div className="__featured-products-title">
                <h2>{title}</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {
                  items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection