import React, { useState, useEffect } from "react";
import PubliPerfil from "./PubliPerfil";
import { extractUser } from "../../Helpers/jwt";
import { listarPublicacionesxUser } from "../../services/services";

const ContainerPerfil = () => {
  const [Post, setPost] = useState([]);
  // const fetchPublicacionesxUser = async () => {
  //   const user = await extractUser();
  //   try {
  //     const publicaciones = await listarPublicacionesxUser(user);
  //     setPost(publicaciones.publicacion);
  //     console.log(publicaciones);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPublicacionesxUser();
  // }, []);
  return (
    <div className="DivContainerPubli">
      <PubliPerfil />
      <PubliPerfil />
      <PubliPerfil />
      <PubliPerfil />
      <PubliPerfil />
      <PubliPerfil />
      <PubliPerfil />
      <PubliPerfil />
      <PubliPerfil />
    </div>
  );
};

export default ContainerPerfil;
