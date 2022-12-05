import React from 'react'
import { ProductItem } from '../models/ProductModels'
import ProductCard from './ProductCard'

interface SaleCardType{
  products: ProductItem[]
}

const SaleCard: React.FC<SaleCardType> = ({products = []}) => {
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-2 g-4 salecard">
            {
              products.map(product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
    </div>
  )
}

export default SaleCard