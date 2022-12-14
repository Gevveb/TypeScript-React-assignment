import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { INewProductContext, NewProductContext } from '../Contexts/NewProductContext'
import { NewProduct } from '../Models/CRUDModels'



const NewProductsList = () => {
    const { newProducts, getAll, remove } = React.useContext(NewProductContext) as INewProductContext
    useEffect(() => {
        getAll()
    }, [])


    const removeProduct = (articleNumber: string) => {
        remove(articleNumber)

    }


    return (
        <>
            <h3 className="display-6 mb-4">List of Products</h3>
            {
                newProducts.map((newProduct: NewProduct) => (
                    <div className=" test3" key={newProduct.articleNumber}>
                        <div className="mb-3 ">
                            {newProduct.name} {newProduct.category} {newProduct.price} {newProduct.imageName}
                        </div>
                        <div className="test2" onClick={() => removeProduct(newProduct.articleNumber)}>
                            <i className="fa-sharp fa-solid fa-trash"></i>
                        </div>
                        <NavLink className="test" to={`/${newProduct.articleNumber}`} end><i className="fa-regular fa-dice"></i></NavLink>

                    </div>))
            }
        </>
    )
}

export default NewProductsList