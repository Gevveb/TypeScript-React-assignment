import React from 'react'
import { NavLink } from 'react-router-dom'

interface breadcrumbType {
  currentPage: string
  parentPage?: string
}

const BreadcrumbSection: React.FC <breadcrumbType> = ({currentPage, parentPage}) => {
  return (
    <section className="breadcrumb">
        <div className="container">
            <ul className="breadcrumb-list">
                <li><NavLink to="/"><i className="fa-sharp fa-solid fa-house"></i></NavLink></li>
                {
                  (parentPage != undefined) ? <li><NavLink to={`/${parentPage}`}>{parentPage}</NavLink></li> : ""
                }
                <li>{currentPage}</li>
            </ul>
        </div>
    </section>
  )
}

export default BreadcrumbSection