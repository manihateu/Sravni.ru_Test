import React from 'react'
import './PhotoCard.scss'

const PhotoCard = (props) => {
  return (
    <div className='img__block'>
        <img src={props.img} title={props.id}/>
        <span>{props.id}</span>
    </div>
  )
}

export default PhotoCard