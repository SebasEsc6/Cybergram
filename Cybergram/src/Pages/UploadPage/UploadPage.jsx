import React, { useEffect, useRef } from "react";
import CancelItem from "../../Components/Shared/CancelItem/CancelItem";
import { getToken } from "../../Helpers/localstorage";
import { extractUser } from "../../Helpers/jwt";
import { CrearPubli } from "../../services/services";

function Uploadpage() {
  const [Lugar, setLugar] = useState("");
  const [loading, setloading] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setLugar({
      ...Lugar,
      [e.target.id]: e.target.value,
    });
  };

  const uploadImage = async (e) => {
    const files = inputRef.current.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "publicaciones");
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
    const resCloud = await uploadImage();
    try {
      const { uid } = await extractUser(getToken());
      const res = await CrearPubli(resCloud, Lugar, uid);
      toast.info("Update exitoso, disfruta");
      console.log("Registro exitoso:", res.data);
    } catch (error) {
      console.error("Error al Update:", error.response.data);
      toast.error("Error al Update: " + error.response.data.errors.msg);
    }
  };

  return (
    <div className="Upload">
      <CancelItem />
      <h1>
        Upload a photo <br />
        or video
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="inputBx">
          <input type="file" id="archivo" ref={inputRef} placeholder="Place" />
          <input
            type="text"
            id="date"
            onChange={handleChange}
            placeholder="Date"
          />
          <input type="submit" placeholder="" />
        </div>
      </form>
    </div>
  );
}

export default Uploadpage;
