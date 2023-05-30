import React from "react";
import PhotoPerfil from "../../assets/Multimedia/imgs/imgPerfil.jpg";
import iconlike from "../../assets/Multimedia/imgs/Icon-Like.png";
import iconcomment from "../../assets/Multimedia/imgs/Icon-comments.png";

const PubliPerfil = (props) => {
  return (
    <>
      <div className="publiPerfil">
        <img src={props.photo} className="PhotoPerfil"></img>
        <div className="iconsPubli">
          <button>
            <img src={iconlike} className="iconsPerfil"></img>
          </button>
          <button>
            <img src={iconcomment} className="iconsPerfil"></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default PubliPerfil;
