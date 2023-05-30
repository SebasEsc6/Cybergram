import React from 'react'
import PhotoUser from '../../assets/Multimedia/imgs/PhotoUser.jpg'

function ItemPerfil(props) {

  return (
    <div className="container-perfil">
      <div className="photo-user">
        <img src={PhotoUser} className='photoUser'></img>
      </div>
      <div className="info-user">
        <div className="name-user">
          {props.User}
        </div>
        <div className="ubication-user">
          {props.lugar}
        </div>
        <div className="date-user">
          27/02/2089
        </div>
      </div>
    </div>
  )
}

export default ItemPerfil