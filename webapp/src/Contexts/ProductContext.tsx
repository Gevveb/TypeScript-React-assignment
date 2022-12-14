import { useContext, useState } from "react";
import { createContext } from "react";
import { ProductItem } from "../models/ProductModels";


interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    allProducts: ProductItem[]
    featuredProducts: ProductItem[]
    sweaters: ProductItem[]
    sets: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getAllProducts: () => void
    getFeaturedProducts: (take?: number) => void
    getSweaters: (take?: number) => void
    getSets: (take?: number) => void
}


export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }


const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const empty_product_values: ProductItem = {
        tag:'',
        articleNumber: '',
        name: '',
        description: '',
        category: '',
        rating: '',
        price: 0,
        imageName: ''
    }
    const [product, setProduct] = useState<ProductItem>(empty_product_values)
    const [allProducts, setAllProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [sweaters, setSweaters] = useState<ProductItem[]>([])
    const [sets, setSets] = useState<ProductItem[]>([])


    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const result = await fetch(baseUrl + `/product/details/${articleNumber}`)
            setProduct(await result.json())
        }
    }
    const getAllProducts = async () => {   
        const result = await fetch(baseUrl)
        setAllProducts(await result.json())
    }

    const getFeaturedProducts = async (take: number = 0) => {
        let url = `${baseUrl}/featuredProducts`
        if (take !== 0)
            url += `/${take}`

        const result = await fetch(url)
        setFeaturedProducts(await result.json())
    }

    const getSweaters = async (take: number = 0) => {
        let url = `${baseUrl}/categories/detail/Sweaters`
        if (take !== 0)
            url += `/${take}`

        const result = await fetch(url)
        setSweaters(await result.json())
    }
    const getSets = async (take: number = 0) => {
        let url = `${baseUrl}/categories/detail/Sets`
        if (take !== 0)
            url += `/${take}`

        const result = await fetch(url)
        setSets(await result.json())
    }
    

    return (
        <ProductContext.Provider value={{ product, allProducts, featuredProducts, sweaters, sets, getAllProducts, getProduct, getFeaturedProducts, getSweaters, getSets }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;



















// import { useContext, useState } from "react";
// import { createContext } from "react";


// const ProductContext = createContext()

// export const useProductContext = () => {
//     return useContext(ProductContext)
// }


// export const ProductProvider = ({children}) => {
//     const url = 'https://win22-webapi.azurewebsites.net/api/products'
//     const [product, setProduct] = useState({})
//     const [products, setProducts] = useState([])
//     const [featuredProducts, setFeaturedProducts] = useState([])

//     const getProducts = async () => {
//         const result = await fetch(url)
//         setProducts(await result.json())
//     }

//     const getFeaturedProducts = async (take = 0) => {
//         const result = await fetch(url + `?take=${take}`)
//         setFeaturedProducts(await result.json())
//     }
//     const getProduct = async () => {
//         const result = await fetch(url + `/${articleNumber}`)
//         setProduct(await result.json())
//     }


//     return (
//         <ProductContext.Provider value={{product, products, featuredProducts, getProducts, getFeaturedProducts, getProduct }}>
//             {children}
//         </ProductContext.Provider>
//     )
// }




























// import ProductDetailItem from "../components/ProductDetailItem";
// import ProductDetailsView from "../views/ProductDetailsView";


// const { createContext, useContext, useState} = require("react");
// const ProductDetailContext = createContext()

// export const useProductDetail = () => {
//     return useContext(ProductDetailContext)
// }

// export const ProductDetailProvider = ({children}) => {
//     const [detilItems, setDetilItems] = useState([])

//     const detilQuantity = detilItems.reduce(
//         (quantity, item) => item.quantity + quantity, 1
//     )

//     const getItemQuantity = (articleNumber) => {
//         return detilItems.find(item = item.articleNumber === articleNumber)?.quantity || 0
//     }

//     const IncrementQuantity = (detilItem ) => {
//         const {articleNumber, product} = detilItem

//         setDetilItems(items => {
//             if(items.find(item => item.articleNumber === articleNumber) == null){
//                 return [...items, {articleNumber, product, quantity: 1}]
//             } else {
//                 return items.map (item => {
//                     if(item.articleNumber === articleNumber) {
//                         return{...item, quantity : item.quantity + 1}
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }

//     const DecrementQuantity = (detilItem ) => {
//         const {articleNumber} = detilItem

//         setDetilItems(items => {
//             if(items.find(item => item.articleNumber === articleNumber).quantity === 1){
//                 return items.filter(item => item.articleNumber !== articleNumber)
//             } else {
//                 return items.map (item => {
//                     if(item.articleNumber === articleNumber) {
//                         return{...item, quantity : item.quantity - 1}
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }


//     return <ProductDetailContext.Provider value={{detilItems, detilQuantity, getItemQuantity, IncrementQuantity, DecrementQuantity}}>
//         {children}
//     </ProductDetailContext.Provider>
// }