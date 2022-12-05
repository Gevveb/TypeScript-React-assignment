import React from 'react'
import { shoppingCartContextType, useShoppingCartContext } from '../Contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'



export const ShoppingCart: React.FC = () => {
  const { cartItems } = useShoppingCartContext() as shoppingCartContextType


  return (
    <div>
      <div className="shoppingCart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping"></i> Shopping Cart</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {
            cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
          }
        </div>
      </div>
    </div>
  )
}
