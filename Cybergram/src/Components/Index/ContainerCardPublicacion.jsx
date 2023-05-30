import React, {useEffect, useState} from 'react'
import CardPublicacion from './CardPublicacion'
import {listarPublicaciones} from "../../services/services"   

function ContainerCardPublicacion() {
  const [Post, setPost] = useState([])

  const fetchPublicaciones = async () => {
    try {
      const publicaciones = await listarPublicaciones();
      setPost(publicaciones.publicacion);
      console.log(publicaciones); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  return (
    <div className='containerdiv'>
      {Post?.map((Post)=>{
        return(
      <CardPublicacion key={Post.id} id={Post.id} likes={Post.likes} user={Post.user} NameUser={Post.nameUser} lugar={Post.lugar} />)}
      )}
    </div>
  )
}

export default ContainerCardPublicacion