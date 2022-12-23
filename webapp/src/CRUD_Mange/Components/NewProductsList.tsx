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
            <h3 className="display-6 mb-5">List of Products</h3>
            <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

                {
                    newProducts.map((newProduct: NewProduct) => (
                        <div className="col d-flex" key={newProduct.articleNumber}>

                            <div className="card ">

                                <img className="card-img" src={newProduct.imageName} alt={newProduct.name} />
                                <div className="card-body">
                                    <p className="card-category">category: {newProduct.category}</p>
                                    <div className="card-title">Tag: {newProduct.tag}</div>
                                    <div className="card-title"> Name: {newProduct.name}</div>
                                    <p className="card-price">price: {newProduct.price} $</p>
                                    <div className="test1">
                                        <div className="  __btn-theme-dark" onClick={() => removeProduct(newProduct.articleNumber)}>
                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                        </div>
                                        <NavLink className=" __btn-theme-dark" to={`/update/${newProduct.articleNumber}`} end><i className="fa-regular fa-dice"></i></NavLink>
                                    </div>

                                </div>

                            </div>
                        </div>))
                }
            </div>
        </>
    )
}

export default NewProductsList