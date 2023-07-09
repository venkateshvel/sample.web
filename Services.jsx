import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/services.css"
const Services = () => {
  return (
    <div>
      <div className="services">
       <Carousel infiniteLoop={true} autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={3000} transitionTime={1000} >
        <div>
          <img src="/images/call-center.jpg" alt="image1" />
          <p className='legend'>CallCenter</p>
        </div>
        <div>
          <img src="/images/laptop-1.jpg" alt="image2" />
          <p className='legend'> Laptop</p>
        </div>
        <div>
          <img src="/images/social.jpg" alt="image3" />
          <p className='legend'>social</p>
        </div> 
        <div>
          <img src="/images/networks.jpg" alt="image4" />
          <p className='legend'>Networks</p>
        </div>
       </Carousel>
      </div>
    </div>
  )
}

export default Services
