import React, { useState, useContext, createContext } from 'react'
import { NewProduct, NewProductRequest, NewProductUpdate } from '../Models/CRUDModels'
import { NewProductProviderProps } from '../Models/NewProductProviderPropsModel'

export interface INewProductContext {
    newProduct: NewProduct
    setNewProduct: React.Dispatch<React.SetStateAction<NewProduct>>
    newProductRequest: NewProductRequest
    setNewProductRequest: React.Dispatch<React.SetStateAction<NewProductRequest>>
    newProducts: NewProduct[]
    create: (e: React.FormEvent) => void
    get: (articleNumber: string) => void
    getAll: () => void
    update: (e: React.FormEvent, articleNumber: string) => void
    remove: (articleNumber: string) => void
}

export const NewProductContext = createContext<INewProductContext | null>(null)
export const useNewProductContext = () => { return useContext(NewProductContext) }

const NewProductProvider = ({ children }: NewProductProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/products'
    const newProduct_default: NewProduct = {
        articleNumber: '',
        name: '',
        category: '',
        price: '',
        imageName: '',
        tag: '',
        description: '',
        rating: ''
    }
    const newProductRequest_default: NewProductRequest = {
        name: '',
        category: '',
        price: '',
        imageName: '',
        tag: '',
        description: '',
        rating: ''
    }

    const [newProduct, setNewProduct] = useState<NewProduct>(newProduct_default)
    const [newProductRequest, setNewProductRequest] = useState<NewProductRequest>(newProductRequest_default)
    const [newProducts, setNewProducts] = useState<NewProduct[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newProductRequest)
        })
        if (result.status === 201)
            setNewProductRequest(newProductRequest_default)
        window.location.reload()

    }
    const get = async (articleNumber: string) => {
        try {
            const result = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            if (result.status !== 200) {
                throw new Error(result.statusText)
            }
            const data = await result.json()
            console.log(data)
            setNewProduct(data)

        } catch (err) {
            console.log(err)
        }
    }
    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200)
            setNewProducts(await result.json())
    }

    const update = async (e: React.FormEvent, articleNumber: string) => {
        e.preventDefault()
        console.log(articleNumber)
        const result = await fetch(`${baseUrl}/${articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newProduct)
        })
        if (result.status === 200) {
            setNewProduct(await result.json())
            setNewProduct(newProduct_default)
            window.location.reload()
        }


    }
    const remove = async (articleNumber: string) => {
        const result = await fetch(`${baseUrl}/${articleNumber}`, {
            method: 'delete',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (result.status === 204)
            setNewProduct(newProduct_default)
        window.location.reload()
    }

    return (
        <NewProductContext.Provider value={{ newProduct, setNewProduct, newProductRequest, setNewProductRequest, newProducts, create, get, getAll, update, remove }}>
            {children}
        </NewProductContext.Provider>
    )
}

export default NewProductProvider