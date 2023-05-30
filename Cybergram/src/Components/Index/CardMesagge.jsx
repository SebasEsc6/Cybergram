import React, { useState, useEffect } from "react";
import img_user from "../../assets/Multimedia/imgs/img_user.png";
import image_11 from "../../assets/Multimedia/imgs/image_11.png";
import { io } from "socket.io-client";
const socket = io("http://localhost:4500");

function ItemMesagge() {
  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));
    socket.on("chat_message", (data) => {
      setMensajes((mensajes) => [...mensajes, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat_message");
    };
  }, []);

  const enviarMensaje = () => {
    socket.emit("chat_message", {
      usuario: socket.id,
      mensaje: nuevoMensaje,
    });
    setNuevoMensaje("");
  };

  return (
    <div className="ItemMesagge">
      <div className="mensaje_propio">
        <img src={img_user} alt="imagen" className="imagen_usuario" />
        <a> {isConnected ? "Conectado" : "No conectado"}</a>
      </div>

      {mensajes.map((mensajes) => (
        <div className="mensaje_ajeno">
          <a>{mensajes.mensaje}</a>
          <img src={image_11} alt="imagen" className="imagen_usuario" />
        </div>
      ))}
      <div className="ItemChatBar">
        <div className="inputBx">
          <input
            type="text"
            placeholder="send message"
            onChange={(e) => setNuevoMensaje(e.target.value)}
          />
        </div>
        <button onClick={enviarMensaje}> Enviar </button>
      </div>
    </div>
  );
}

export default ItemMesagge;
