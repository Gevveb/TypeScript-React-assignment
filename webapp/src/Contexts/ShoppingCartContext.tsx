import { ShoppingCart } from "../components/ShoppingCart";
import { createContext, useContext, useState} from "react";
import { Cartitem } from "../models/ShoppingCartModels";



 interface shoppingCartProviderType {
    children: any
}


export interface shoppingCartContextType {
    cartItems : Cartitem[]
    cartQuantity: number
    incrementQuantity: (cartItem: Cartitem) => void
    getItemQuantity: (articleNumber: string) => void
    decrementQuantity: (cartItem: Cartitem) => void
    removeItem: (articleNumber: string) => void

}

export const ShoppingCartContext = createContext<shoppingCartContextType | null>(null)

export const useShoppingCartContext = () => {return useContext(ShoppingCartContext)}

export const ShoppingCartProvider: React.FC<shoppingCartProviderType> = ({children}) => {
    const [cartItems, setCartItems] = useState<Cartitem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
         return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
     }

    const incrementQuantity = (cartItem: Cartitem ) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if(items.find(item => item.articleNumber === articleNumber) == null){
                return [...items, {articleNumber, product, quantity: 1}]
            } else {
                return items.map (item => {
                    if(item.articleNumber === articleNumber) {
                        return{...item, quantity : item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: Cartitem ) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
            if(items.find(item => item.articleNumber === articleNumber)?.quantity === 1){
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map (item => {
                    if(item.articleNumber === articleNumber) {
                        return{...item, quantity : item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: string) => {
        setCartItems (items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }


    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}