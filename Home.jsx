import React from 'react'
import "../styles/home.css"
import {AiFillGoogleCircle, AiFillInstagram, AiFillAmazonCircle} from "react-icons/ai"
import {SiFlipkart} from "react-icons/si"
const Home = () => {
  return (
    <div>
      <div className='home1' id='home'>
       <div className='home1-inner'>
        <h1>Coding master</h1>
        <p>Pratice Makes Man Perfect</p>
       </div>
      </div>
      <main className='main'>
      <div className='home2' id='about'>
       <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facere. Voluptates, tempora suscipit dolorum corporis corrupti </p>
       <button className='btn'>read more...</button>
       </div>
      </div>
      </main>
      <div className='home3' id='brands'>
         <div className='home3-inner'>
          <h1>Brands</h1>
         <div className='brands'>
          <div className='brand' style={{  animationDelay:"0.25s"}}>
            <AiFillGoogleCircle className="icons"/>
            <p>Google</p>
          </div>
        <div className='brand' style={{animationDelay:"0.5s"}}>
        <AiFillAmazonCircle className="icons"/>
         <p>Amazon</p>
        </div>
        <div className='brand' style={{animationDelay:"0.75s"}}> 
         <AiFillInstagram className="icons"/>
         <p>Instagram</p>
        </div>
        <div className='brand' style={{animationDelay:"1s"}}>
          <SiFlipkart className="icons"/>
          <p>Filpkart </p>
        </div>
         </div>
         </div>
      </div>
      
    </div>
  )
}

export default Home
