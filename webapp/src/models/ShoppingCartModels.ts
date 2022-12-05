import { ProductItem } from "./ProductModels"

export interface Cartitem {
    articleNumber: string
    product: ProductItem
    quantity?: any
}