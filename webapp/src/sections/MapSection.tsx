import React from 'react'

const MapSection: React.FC = () => {
  return (
    <section className="map">
      <iframe
        className="google-map"
        title="goole-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0047432928573!2d15.213263205368756!3d59.273908991163516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14e28e532c05%3A0xafa950e40634bfcb!2s%C3%96rebro%20Slott!5e0!3m2!1ssv!2sse!4v1665941590164!5m2!1ssv!2sse"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  )
}

export default MapSection