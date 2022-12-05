import React from 'react'
import MainMenuSection from '../../sections/MainMenuSection'
import { NewProductContext, INewProductContext } from '../Contexts/NewProductContext'
import NewProductsList from './NewProductsList'
import UpdateForm from './UpdateForm'

const CreateForm = () => {

  const { newProductRequest, setNewProductRequest, create } = React.useContext(NewProductContext) as INewProductContext
  return (
    <div>
      <MainMenuSection />
      <form onSubmit={create} className="d-grid mb-5">
        <h3 className="display-6 mb-4"> Create User</h3>
        <input value={newProductRequest.name} onChange={(e) => setNewProductRequest({ ...newProductRequest, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your first name" ></input>
        <input value={newProductRequest.category} onChange={(e) => setNewProductRequest({ ...newProductRequest, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your last name" ></input>
        <input value={newProductRequest.price} onChange={(e) => setNewProductRequest({ ...newProductRequest, price: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your email" ></input>
        <input autoComplete="true" value={newProductRequest.imageName} onChange={(e) => setNewProductRequest({ ...newProductRequest, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your password" ></input>
        <button type="submit" className="btn btn-success py-2 mt-3">CREATE USER</button>
      </form>
      <NewProductsList />
    </div>
  )
}

export default CreateForm