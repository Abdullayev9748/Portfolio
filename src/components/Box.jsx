import React from 'react'

function Box({ image, title, url }) {
  return (
    <div className='card' onClick={()=>window.location = url}>
          <img src={image} alt={title} className="card__image" />
          <div className="card__content">
              <h3 className='card__title'>{title}</h3>
              <button className='card__btn'>Watch</button>
          </div>
    </div>
  )
}

export default Box