export interface NewProduct {
    id: number
    name: string
    category: string
    price: string
    imageName: string
}
export interface NewProductRequest {
    name: string
    category: string
    price: string
    imageName: string
}

export interface NewProductUpdate {
    id: number
    name: string
    category: string
    price: string
    imageName: string
}