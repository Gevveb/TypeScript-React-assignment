import React from 'react'
import { Link } from 'react-router-dom'
import img3 from  '../assets/Images/girl-image.png'
import img4 from  '../assets/Images/girl-image2.png'

const ShowcaseSection: React.FC = () => {
  return (   
        <section className="__showcase container">
            <img src={img3} className="__img-left" alt=""/>
            <div className="__show-case-body">
                <h1>Sale Up</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free gome delivery over $100</p>
                <Link className="__btn-theme" to="/products">
                    <span className="__btn-theme-left"></span>
                    <span className="__btn-theme-right"></span>
                    SHOP NOW
                </Link>
            </div>
            <img src={img4} className="__img-right" alt=""/>
        </section>
  )
}

export default ShowcaseSection