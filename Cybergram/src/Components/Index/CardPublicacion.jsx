import React, {useEffect, useState} from 'react'
import ItemComentario from './ItemComentario'
import ItemPerfil from './ItemPerfil'
import img from '../../assets/Multimedia/imgs/imgPerfil.jpg'
import iconcomment from '../../assets/Multimedia/imgs/Icon-comments.png'
import iconlike from '../../assets/Multimedia/imgs/Icon-Like.png'
import {listarCommentsxPubli} from "../../services/services"   

function CardPublicacion(props) {
  const [comentarios, setcomentarios] = useState([])

  const fetchComentarios = async () => {
    const publi = props.id ;
    try {
      const comentarios = await listarCommentsxPubli(publi);
      setcomentarios(comentarios.Comments);
      console.log(comentarios); 
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchComentarios();
  }, []);

  return (
    <div className='containerG'>
      <div className="containerPubli">
        <div className="DivPhoto">
          <img src={img} className='photo'></img>
        </div>
        <div className='Perfil'>
          <div className="Componente-Perfil">
            <ItemPerfil User={props.NameUser} lugar={props.lugar} />
          </div>
          <div className="botones">
            <button>
              <img src={iconcomment}></img>
            </button>
            <button>
              <img src={iconlike}></img>
            </button>
            <p>{props.likes}</p>
          </div>
        </div>
        <div className="comments">
          {comentarios?.map((comentario) => {
            return (
              <ItemComentario key={comentario.id} user={comentario.nameUser} comment={comentario.contentComment} />
            );
          })}
        </div>
      </div>
    </div>
  );}
export default CardPublicacion