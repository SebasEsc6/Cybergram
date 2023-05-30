import React, { useEffect, useRef, useState } from "react";
import CancelItem from "../../Components/Shared/CancelItem/CancelItem";
import { getToken } from "../../Helpers/localstorage";
import { extractUser } from "../../Helpers/jwt";
import { CrearPubli } from "../../services/services";
import "./UploadPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Uploadpage() {
  const [lugar, setLugar] = useState("");
  const [Post, setPost] = useState("");
  const [loading, setloading] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setLugar(e.target.value);
  };

  const uploadImage = async (e) => {
    const files = inputRef.current.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Publicacion");
    setloading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlnt393h1/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setPost(file.secure_url);
    setloading(false);
    return file.secure_url;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const photo = await uploadImage();
    const likes = "0";
    try {
      const { uid, name } = await extractUser(getToken());
      const nameUser = name;
      console.log(photo, lugar, uid, likes, nameUser);
      const res = await CrearPubli(photo, likes, uid, nameUser, lugar);
      toast.info("Se realizo la publicación!!");
      console.log(res);
    } catch (error) {
      console.error("No se pudo hacer la publicación:", error);
      toast.error("No se pudo hacer la publicación: " + error);
    }
  };

  return (
    <div className="Upload">
      <CancelItem />
      <ToastContainer />
      <h1>
        Upload a photo <br />
        or video
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="inputBx">
          <input type="file" id="archivo" ref={inputRef} placeholder="Place" />
          <input
            type="text"
            id="place"
            onChange={handleChange}
            placeholder="Place"
          />
          <input type="submit" placeholder="" />
        </div>
      </form>
    </div>
  );
}

export default Uploadpage;
