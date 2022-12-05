import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { NewProductContext, INewProductContext } from '../Contexts/NewProductContext'



const UpdateForm: React.FC = () => {

  const { newProduct, setNewProduct, get, update } = React.useContext(NewProductContext) as INewProductContext
  const { id } = useParams<string>()

  useEffect(() => {
    get(Number(id));
  }, [id])

  return (
    <form onSubmit={update} className="d-grid mb-5">
      <h3 className="display-6 mb-4"> Update User</h3>
      <input type="hidden" value={newProduct.id} />
      <input value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your first name" ></input>
      <input value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your last name" ></input>
      <input value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your email" ></input>
      <input value={newProduct.imageName} onChange={(e) => setNewProduct({ ...newProduct, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter your email" ></input>
      <button type="submit" className="btn btn-success py-2 mt-3">UPDATE USER</button>
    </form>
  )
}

export default UpdateForm


