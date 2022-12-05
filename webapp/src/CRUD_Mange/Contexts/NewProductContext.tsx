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
    get: (id?: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
}

export const NewProductContext = createContext<INewProductContext | null>(null)
export const useNewProductContext = () => { return useContext(NewProductContext) }

const NewProductProvider = ({ children }: NewProductProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/mange/'
    const newProduct_default: NewProduct = { id: 0, name: '', category: '', price: '', imageName: '' }
    const newProductRequest_default: NewProductRequest = { name: '', category: '', price: '', imageName: '' }

    const [newProduct, setNewProduct] = useState<NewProduct>(newProduct_default)
    const [newProductRequest, setNewProductRequest] = useState<NewProductRequest>(newProductRequest_default)
    const [newProducts, setNewProducts] = useState<NewProduct[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProductRequest)
        })
        if (result.status === 201)
            setNewProductRequest(newProductRequest_default)

    }
    const get = async (id?: number) => {
        const result = await fetch(`${baseUrl}/${id}`)
        if (result.status === 200)
            setNewProduct(await result.json())
    }
    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200)
            setNewProducts(await result.json())
    }
    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${newProduct.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        if (result.status === 200) {
            setNewProduct(await result.json())
            setNewProduct(newProduct_default)
        }


    }
    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'delete',
        })
        if (result.status === 204)
            setNewProduct(newProduct_default)
    }

    return (
        <NewProductContext.Provider value={{ newProduct, setNewProduct, newProductRequest, setNewProductRequest, newProducts, create, get, getAll, update, remove }}>
            {children}
        </NewProductContext.Provider>
    )
}

export default NewProductProvider