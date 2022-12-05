import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { shoppingCartContextType, useShoppingCartContext } from '../Contexts/ShoppingCartContext'
import ExternalLinkIcon from '../components/ExternalLinkIcon'
import { ProductContextType, useProductContext } from '../Contexts/ProductContext'



const ProductDetailsView: React.FC = () => {
  const { id } = useParams<string>()
  const ProductContext = useProductContext() as ProductContextType
  const { incrementQuantity} = useShoppingCartContext() as shoppingCartContextType

  useEffect (() => {
    ProductContext.getProduct(id)
  },[])


  return (
    <>
      <MainMenuSection />
      <div className="product-offer container">
        <h3>Get 25% OFF at the Fixxo Selection - Shop Now!</h3>
      </div>
      <BreadcrumbSection parentPage="Products" currentPage=" Product" />
      <section className="product-offer-section">
        <div className="container">
          <div className="product-offer-image">
            <img id="image-1" src={ProductContext.product.imageName} />
            <img id="image-2" src={ProductContext.product.imageName} />
            <img id="image-3" src={ProductContext.product.imageName} />
            <img id="image-4" src={ProductContext.product.imageName} />
          </div>
          <div className="product-offer-info">
            <h1>{ProductContext.product.name}</h1>
            <p> SKU: 12345670  BRAND: The Northland</p>
            <div className="card-rating">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <div className="product-price">{currencyFormatter(ProductContext.product.price)}</div>
            <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<a href="#">read more</a>)</p>
            <div className="product-offer-details">
              <div className="size">
                <h1>Size:</h1>
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
              </div>
              <div className="color">
                <h1>Color:</h1>
                <div className="dropdown">
                  <button className="btn btn-color dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose an Option
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Black</a></li>
                    <li><a className="dropdown-item" href="#">Pink</a></li>
                    <li><a className="dropdown-item" href="#">White</a></li>
                  </ul>
                </div>
              </div>
              <div className="Qty">
                <h1>Qty:</h1>
                <div className="Qty-btn">
                  <button>+</button>
                  <div>1</div>
                  <button>-</button>
                </div>
                <button className="__btn-theme btn-theme" onClick={() => incrementQuantity({ articleNumber: ProductContext.product.articleNumber, product: ProductContext.product })}> ADD TO CART</button>
              </div>
              <div className="Share">
                <h1>Share:</h1>
                <div className="social-media-share">
                  <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook-f" />
                  <ExternalLinkIcon link="https://instagram.com" icon="fa-brands fa-instagram" />
                  <ExternalLinkIcon link="https://twitter.com" icon="fa-brands fa-twitter" />
                  <ExternalLinkIcon link="https://google.com" icon="fa-brands fa-google" />
                  <ExternalLinkIcon link="https://linkedin.com" icon="fa-brands fa-linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ............................... */}
      <div className="info-section container">
        <div>
          <p>
            <button className="active-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample1" aria-expanded="false" aria-controls="collapseWidthExample">
              Description
            </button>
            <button className="info-section-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample2" aria-expanded="false" aria-controls="collapseWidthExample">
              Additional
            </button>
            <button className="info-section-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample3" aria-expanded="false" aria-controls="collapseWidthExample">
              Shopping & Returns
            </button>
            <button className="info-section-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample4" aria-expanded="false" aria-controls="collapseWidthExample">
              Reviews
            </button>
          </p>
          <div>
            <div className="collapse in show" id="collapseWidthExample1">
              <div className="info-section-card">
                Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.
              </div>
              <div className="info-section-card">
                * Village did removed enjoyed explain nor ham saw calling talking.
              </div>
              <div className="info-section-card">
                * Securing as informed declared or margaret.
              </div>
              <div className="info-section-card">
                * Joy horrible moreover man feelings own shy.
              </div>
              <div className="info-section-card">
                On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsView


// useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
  //     setProduct(await result.json())

  //   }
  //   fetchData()
  // }, [])