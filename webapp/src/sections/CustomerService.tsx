import React from 'react'
import card from  '../assets/Images/creditCard.svg'
import service from  '../assets/Images/customer-service.svg'
import delivery from  '../assets/Images/delivery-truck.svg'

const CustomerService = () => {
  return (
    <>
        <hr className="hr" />   
        <section className="customer-service container">
            
            <div className="services">
                <div className="service-img">
                    <img src={service} alt=""/>
                </div>
                <h2>
                Customer Support
                </h2>
                <p>
                Village did removed enjoyed explain talking.
                </p>
            </div>
            <div className="services">
                <div className="service-img">
                    <img src={card} alt=""/>
                </div>
                <h2>
                Secured Payment
                </h2>
                <p>
                Village did removed enjoyed explain talking.
                </p>
            </div>
            <div className="services">
                <div className="service-img">
                    <img src={delivery} alt=""/>
                </div>
                <h2>
                Free Home Delivery
                </h2>
                <p>
                Village did removed enjoyed explain talking.
                </p>
            </div>
            <div className="services">
                <div className="service-img">
                    <img src={delivery} alt=""/>
                </div>
                <h2>
                30 Day Reuters
                </h2>
                <p>
                Village did removed enjoyed explain talking.
                </p>
            </div>
        </section>
    </>
  )
}

export default CustomerService