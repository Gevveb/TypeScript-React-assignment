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
  const {featuredProducts, getFeaturedProducts, sweaters, getSweaters, sets, getSets} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
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

