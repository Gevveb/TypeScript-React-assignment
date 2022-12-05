import React from 'react'

const TopPicksSection = () => {
  return (
    <section className="__banners container">
        <div className="banners-title-1">
            <div className="__title-1">
                <h1>Pamela Reif's</h1>
                <h2>Top Picks</h2>
                <a className="__btn-theme-dark" href="">
                    <span className="__btn-theme-left"></span>
                    <span className="__btn-theme-right"></span>
                    SHOP NOW
                </a>
            </div>

        </div>
        <div className="banners-title-2">
            <div className="__title-2">
                <h1>Let's Be</h1>
                <h2>Conscious</h2>
                <a className="__btn-theme-white" href="">
                    <span className="__btn-theme-left"></span>
                    <span className="__btn-theme-right"></span>
                    FALSE SALE
                </a>
            </div>

        </div>
    </section>
  )
}

export default TopPicksSection