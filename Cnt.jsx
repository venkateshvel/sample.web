import React from 'react'
import"../styles/contact.css"

const Cnt = () => {
  return (
    <div className='contact'>
      <h1>contact</h1>
      <div className="contact-inner">
        <form action="">
          <div className="form-group">
            <label>Fullname</label>
            <input type="text" placeholder='Enter Fullname' />
          </div>
          <div className="form-group">
            <label>Email Id</label>
            <input type="text" placeholder='Enter Email Id' />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" placeholder='Enter Phone' />
          </div>
          <div className="form-group">
            <label>Queries</label>
            <input type="text" placeholder='Tell us about your Query' />
          </div>
          <div className="form-sumbit">
             <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Cnt
