import React from 'react'

const ProductDetailItem = () => {
  return (
    <div>ProductDetailItem</div>
  )
}

export default ProductDetailItem

// import React from 'react'


// import { useProductDetail } from '../Contexts/ProductContext'

// const ProductDetailItem = ({item}) => {
//     const { IncrementQuantity, DecrementQuantity } = useProductDetail()


//     return (
//         <div className="Qty-btn">
//             <button onClick={() => IncrementQuantity(item)}>+</button>
//             <div>{item.quantity}</div>
//             <button onClick={() => DecrementQuantity(item)}>-</button>
//         </div>
//     )
// }

// export default ProductDetailItem