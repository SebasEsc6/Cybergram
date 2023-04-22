import React from 'react'
import imgperfil from '../../assets/Multimedia/imgs/imgPerfil.jpg'
import CardPublicacion from './CardPublicacion'

function CardProfile(props) {
  return (
    <div className="containerPerfil">
      <div className="lblUser">
        <a>{props.user}</a>
      </div>
      <div className="imgUserProfile">
        <img src={imgperfil} className='imgPhotoProfile'></img>
      </div>
      <div className='divLabels'>
      <div className="lblFollowers"><a className='txtBlanco'>Followers</a><a className='txtMorao'>{props.followers}</a></div>
      <div className="lblPost"><a className='txtBlanco'>Post</a><a className='txtMorao'>{props.post}</a></div>
      <div className="lblFollowinf"><a className='txtBlanco'>Following</a><a className='txtMorao'>{props.followers}</a></div>
      </div>
      <div className='DivContainerPubli'>
      <CardPublicacion />
      <CardPublicacion />
      <CardPublicacion />
      <CardPublicacion />
      <CardPublicacion />
      <CardPublicacion />
      <CardPublicacion />
      <CardPublicacion />
      <CardPublicacion />
      </div>
    </div>
  )
}

export default CardProfile
