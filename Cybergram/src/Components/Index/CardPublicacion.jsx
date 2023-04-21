import React from 'react'
import ItemComentario from './ItemComentario'
import ItemPerfil from './ItemPerfil'
import img from '../../assets/Multimedia/imgs/imgPerfil.jpg'
import iconcomment from '../../assets/Multimedia/imgs/Icon-comments.png'
import iconlike from '../../assets/Multimedia/imgs/Icon-Like.png'

function CardPublicacion() {
  return (
    <div className='containerG'>
      <div className="container">
        <div className="DivPhoto">
          <img src={img} className='photo'></img>
        </div>
        <div className='Perfil'>
          <div className="Componente-Perfil">
            <ItemPerfil />
          </div>
          <div className="botones">
            <button>
              <img src={iconcomment}></img>
            </button>
            <button >
              <img src={iconlike}></img>
            </button>
          </div>
        </div>
        <div className="comments">
          <ItemComentario user="Josecito38" comment="¡Hostia tioo si que mola la foto.!!" />
          <ItemComentario user="Elpi_chalarga" comment="Que follon tio, guapisimo."/>
        </div>
      </div>
    </div>
  )
}
export default CardPublicacion