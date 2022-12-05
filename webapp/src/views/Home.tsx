import React ,{useState, useEffect} from 'react'
import SaleCard from '../components/SaleCard'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import SaleSection from '../sections/SaleSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import SaleSectionRight from '../sections/SaleSectionRight'
import CustomerService from '../sections/CustomerService'
import { ProductContextType, useProductContext } from '../Contexts/ProductContext'




const Home = () => {
 document.title = 'Fixxo.'
  const {featuredProducts, getFeaturedProducts, saleCardProducts, getSaleCardProducts, sweaters, getSweaters, sets, getSets} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
  },[])

  useEffect(() => {
    getSaleCardProducts(4)
  },[])
  useEffect(() => {
    getSweaters(4)
  },[])
  useEffect(() => {
    getSets(4)
  },[])


  return (
    <>
    <header className="gradient-gray">
      <MainMenuSection />
      <ShowcaseSection />
    </header>
    <ProductGridSection title="Featured Products" items={featuredProducts} />
    <TopPicksSection />
    <div className="flash-sale-left container">
    <SaleSection />
    <SaleCard products={sweaters}/> 
    </div>
    <div className="flash-sale-right container">
    <SaleCard products={sets}/>
     < SaleSectionRight />
    </div>
    <CustomerService />
    </>
  )
}

export default Home 













// const products = useContext(FeaturedProductsContext) 
// const[topProducts, setTopProducts] = useState([
  //   {tag: "", articleNumber: "1", name: "BLACK SHOES", category: "Fashion", description: "" ,price: 120.00, rating: 5, imageName: "https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}, 
  //   {tag: "", articleNumber: "2", name: "BEIGE BLAZER", category: "Fashion", description: "" , price: 110.00, rating: 5, imageName: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {tag: "", articleNumber: "3", name: "RED JEANS SET", category: "Fashion", description: "" , price: 89.00, rating: 5, imageName: "https://images.pexels.com/photos/718977/pexels-photo-718977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  //   {tag: "", articleNumber: "4", name: "DENIM JACKET", category: "Fashion", description: "" , price: 42.00, rating: 5, imageName: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  // ]) 