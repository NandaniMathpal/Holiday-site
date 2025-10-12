import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div>
      <div className="form-cards">
        <div className="fcard">
          <i class="ri-phone-fill"></i>
          <h1>Make a Call</h1>
          <p>+918506922777</p>
          <p>+918506944777</p>
        </div>
        <div className="fcard">
          <i class="ri-mail-line"></i>
          <h1>Send A Mail</h1>
          <p>jingleholidaybazar@gmail.com</p>
          <p>thejingleholidaybazar@gmail.com</p>
        </div>
        <div className="fcard">
          <i class="ri-map-pin-2-fill"></i>
          <h1>Find Us</h1>
          <p>3C, A1 Sector 10, Noida</p>
          <p>Uttar Pradesh, India</p>
        </div>
      </div>


      <div className="heading">
        <h1>Have a Question ?</h1>
      </div>

      <div className="form">
        <form action="">
          <div className="name">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email address' />
          <textarea>Your Comment</textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Form
