import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MainMenuSection from '../../sections/MainMenuSection';
import { NewProductContext, INewProductContext } from '../Contexts/NewProductContext'
import NewProductsList from './NewProductsList';



const UpdateForm: React.FC = () => {

  const { newProduct, setNewProduct, get, update } = React.useContext(NewProductContext) as INewProductContext
  const { id } = useParams<string>()

  useEffect(() => {
    get(String(id));
  }, [id])

  return (
    <div className="container">
      <MainMenuSection />
      <form onSubmit={(e) => update(e, newProduct.articleNumber)} className="d-grid mb-5">
        <h3 className="display-6 mb-4"> Update product</h3>
        <input type="hidden" value={newProduct.articleNumber} />
        <input value={newProduct.tag} onChange={(e) => setNewProduct({ ...newProduct, tag: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter a tag" ></input>
        <input value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter a name" ></input>
        <input value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter a category" ></input>
        <input value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter a description" ></input>
        <input value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter a price" ></input>
        <input value={newProduct.rating} onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter a rating" ></input>
        <input value={newProduct.imageName} onChange={(e) => setNewProduct({ ...newProduct, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="Enter a image url" ></input>
        <button type="submit" className=" btn __btn-theme py-2 mt-3">UPDATE PRODUCT</button>
      </form>
      <NewProductsList />
    </div>
  )
}

export default UpdateForm


