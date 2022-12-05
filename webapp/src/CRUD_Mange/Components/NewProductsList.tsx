import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { INewProductContext, NewProductContext } from '../Contexts/NewProductContext'
import { NewProduct } from '../Models/CRUDModels'



const NewProductsList = () => {
    const { newProducts, getAll, remove } = React.useContext(NewProductContext) as INewProductContext
    useEffect(() => {
        getAll()
    }, [getAll])


    const removeProduct = (id: number) => {
        remove(id)

    }


    return (
        <>
            <h3 className="display-6 mb-4">List of Products</h3>
            {
                newProducts.map((newProduct: NewProduct) => (
                    <div className="d-flex" key={newProduct.id}>
                        <div className="mb-3 test">
                            {newProduct.name} {newProduct.category} {newProduct.price} {newProduct.imageName}
                        </div>
                        <div className="test2" onClick={() => removeProduct(newProduct.id)}>
                            ❌
                        </div>
                        <NavLink to={`/${newProduct.id}`} end>🔃</NavLink>

                    </div>))
            }
        </>
    )
}

export default NewProductsList