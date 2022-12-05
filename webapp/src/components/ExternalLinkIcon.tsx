import React from 'react'
interface ExternalLinkIconType{
  link: string
  icon: string
}

const ExternalLinkIcon: React.FC<ExternalLinkIconType> = ({link, icon}) => {
  return (
    <a className="social-media-icon" href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon