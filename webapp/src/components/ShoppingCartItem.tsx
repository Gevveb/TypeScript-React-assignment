import React from 'react'
import { shoppingCartContextType, useShoppingCartContext } from '../Contexts/ShoppingCartContext'
import { Cartitem } from '../models/ShoppingCartModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface ShoppingCartItemType {
  item: Cartitem
}

const ShoppingCartItem: React.FC<ShoppingCartItemType> = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCartContext() as shoppingCartContextType
  return (
    <div className="shoppingcart-item">
      <div className="item-image">
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className="item-info">
        <div className="item-info-name">
          {item.product.name}
        </div>
        <div className="item-info-quantity">
          <button className="box-btn-left" onClick={() => incrementQuantity(item)}>+</button>
          <span> {item.quantity} </span>
          <button className="box-btn-right" onClick={() => decrementQuantity(item)}>-</button>
        </div>
      </div>
      <div className="item-price">
        <div>{currencyFormatter(item.product.price * item.quantity)} </div>
        <button onClick={() => removeItem(item.articleNumber)}><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ShoppingCartItem