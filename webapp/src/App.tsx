import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Contacts from './views/Contacts';
import ProductsView from './views/ProductsView';
import Home from './views/Home';
import NotFound from './views/NotFound';
import ProductDetailsView from './views/ProductDetailsView';
import FooterSection from './sections/FooterSection';
import { ShoppingCartProvider } from './Contexts/ShoppingCartContext';
import  ProductProvider  from './Contexts/ProductContext';
import CreateForm from './CRUD_Mange/Components/CreateForm';
import NewProductProvider from './CRUD_Mange/Contexts/NewProductContext';
import UpdateForm from './CRUD_Mange/Components/UpdateForm';

function App() {

  return (
    <BrowserRouter>
    <ShoppingCartProvider>
      <NewProductProvider>
      <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/mange" element={<CreateForm />} />
            <Route path=":id" element={<UpdateForm />} />
            <Route path="/products/:id" element={<ProductDetailsView />} />
            <Route path="/categories" element={<NotFound />} />
          </Routes>
      </ProductProvider>
      </NewProductProvider>
    </ShoppingCartProvider>
    <FooterSection />
  </BrowserRouter>
  );
}

export default App;

  // const [products, setProducts] = useState([])
  // const [featuredProducts, setFeaturedProducts] = useState([])

  // useEffect(() => {
  // //   const fetchAll = async () => {
  // //     const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
  // //     setProducts(await result.json())
  // //   }
  // //   fetchAll()

  // //   const fetchFeaturedProducts = async () => {
  // //     const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
  // //     setFeaturedProducts(await result.json())
  // //   }
  // //   fetchFeaturedProducts()

  // // }, [setProducts, setFeaturedProducts])

// return (
//   <BrowserRouter>
//   <ShoppingCartProvider>
//     <ProductContext.Provider value={products}>
//       <FeaturedProductsContext.Provider value={featuredProducts}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductsView />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/products/:id" element={<ProductDetailsView />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </FeaturedProductsContext.Provider>
//     </ProductContext.Provider>
//   </ShoppingCartProvider>
//   <FooterSection />

// </BrowserRouter>
// );
// }