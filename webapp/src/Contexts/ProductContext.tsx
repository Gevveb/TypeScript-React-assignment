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
