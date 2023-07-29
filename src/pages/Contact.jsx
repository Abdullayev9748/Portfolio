import React, { useState } from 'react'
import { GiSmartphone } from 'react-icons/gi'
import { BiMap } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

function Contact() {
  
  const [messages, setMessages] = useState({ name: "", email: "", area: "" })
  
  const handleChange = (e) => {
    setMessages(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setMessages({ name: "", email: "", area: "" })
  }
  return (
    <div className='page'>
      <TypeAnimation
        sequence={[
          "Contacts", 1000
        ]}
        speed={1}
        className='title'
      />
      
      <div className="contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.3155637181558!2d69.15865196579625!3d41.25846457797616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89c443d70455%3A0xe0fd382f0b7d53f3!2z0JfQsNGA0LPQsNGA0LvQuNC6INGD0LvQuNGG0LAsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1690633382905!5m2!1sru!2s" width="100%" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
        <div className="contact__box">
          <div className="contact__info">
            <Link to={"tel:+998900229748"} className="contact__link">
              <GiSmartphone />
              <span>+998 90 022 97 48</span>
            </Link>
            <Link to={"#!"} className="contact__link">
              <BiMap />
              <span>Uzbekistan</span>
            </Link>
            <Link to={"mailto:example@gmail.com"} className="contact__link">
              <MdOutlineEmail />
              <span>example@gmail.com</span>
            </Link>
          </div>
          <form onSubmit={onSubmit} className="contact__form">
            <h3 className='box-title'>Contact me <span></span></h3>
            <div className="contact__message">
              <input
                type="text"
                placeholder='Name'
                name="name"
                value={messages.name}
                onChange={handleChange}
                className="contact__input"
                required
              />
              <textarea
                type="text"
                placeholder='Message'
                name="area"
                value={messages.area}
                onChange={handleChange}
                className="contact__area"
                required
              />
              <input
                type="email"
                placeholder='Email'
                name="email"
                value={messages.email}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>
            <button className="contact__send" type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact