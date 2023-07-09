import React from 'react'
 import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer>
      <main className='footer-main1'>
         <HashLink to="/#home"><h3>CODING MASTER</h3></HashLink>
        <small>Solution For All Queries</small>
      </main>
      <main className='footer-main2'>
      <h4>SOCIAL MEDIA</h4>
      <p>solution for all doubts</p>
      <a href='https://www.instagram.com/venky.velpula.716./'>Instagram</a>
      <a href="https://www.linkedin.com/">LinkedIn</a>
      <a href="https://www.twitter.com/">Twitter</a>
      </main>
    </footer>
  )
}

export default Footer
