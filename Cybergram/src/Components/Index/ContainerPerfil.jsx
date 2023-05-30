import React, { useState, useEffect } from "react";
import PubliPerfil from "./PubliPerfil";
import { extractUser } from "../../Helpers/jwt";
import { getToken } from "../../Helpers/localstorage";
import { listarPublicacionesxUser } from "../../services/services";

const ContainerPerfil = () => {
  const [Post, setPost] = useState([]);

  const fetchPublicacionesxUser = async () => {
    const { uid } = await extractUser(getToken());
    try {
      const publicaciones = await listarPublicacionesxUser(uid);
      setPost(publicaciones.publicaciones);
      console.log(publicaciones);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPublicacionesxUser();
    console.log(Post);
  }, []);
  return (
    <div className="DivContainerPubli">
      {Post?.map((Post) => {
        return <PubliPerfil key={Post.id} photo={Post.photo} />;
      })}
    </div>
  );
};

export default ContainerPerfil;
