import React from 'react'
import PhotoUser from '../../assets/Multimedia/imgs/PhotoUser.jpg'

function ItemComentario(props) {
  return (
    <div className="containerIcomment">
      <div className="divphoto-userC">
      <img src={PhotoUser} className='photo-userC'></img>
      </div>
      <div className="comment">
        <p>
          {props.user} : {props.comment}
        </p>
      </div>
    </div>
  )
}

export default ItemComentario