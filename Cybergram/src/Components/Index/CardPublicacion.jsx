import React from 'react'
import ItemComentario from './ItemComentario'
import ItemPerfil from './ItemPerfil'

function CardPublicacion() {
  return (
    <div>
      <image ></image>
      <ItemPerfil />
      <button>Like</button>
      <button>Comment</button>
      <ItemComentario />
      </div>
  ) 
}

export default CardPublicacion