export interface NewProduct {
    articleNumber: string
    tag: string
    name: string
    category: string
    description: string
    price: string
    rating: string
    imageName: string
}
export interface NewProductRequest {
    tag: string
    name: string
    category: string
    description: string
    price: string
    rating: string
    imageName: string
}

export interface NewProductUpdate {
    id: number
    name: string
    category: string
    price: string
    imageName: string
}