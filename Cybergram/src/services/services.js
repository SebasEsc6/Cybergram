import axios from "axios";

const instance = axios.create({
  baseURL: "https://cybergram-production.up.railway.app/api",
});

const LoginUser = async (email, password) => {
  const res = await instance.post("/user/LoginUser", {
    email,
    password,
  });
  return res.data;
};

const registerUser = async (
  name,
  email,
  password,
  followers,
  following,
  photoUser
) => {
  const res = await instance.post("/user/newUser", {
    name,
    email,
    password,
    followers,
    following,
    photoUser,
  });
  return res.data;
};
const userxId = async (id) => {
  const res = await instance.post("/user/UserxId", {
    id,
  });
  return res.data;
};
const CrearPubli = async (photo, likes, uid, nameUser, lugar) => {
  const res = await instance.post("/publicacion/newPublicacion", {
    photo,
    likes,
    uid,
    nameUser,
    lugar,
  });
  return res.data;
};
const listarPublicaciones = async () => {
  const res = await instance.get("/publicacion/listarPubli");
  return res.data;
};
const listarPublicacionesxUser = async (uid) => {
  const res = await instance.post("/publicacion/listarPublixUser", {
    uid,
  });
  return res.data;
};

const CrearComment = async (contentComment, publicacion) => {
  const res = await instance.get("/comentario/Post", {
    contentComment,
    publicacion,
  });
  return res.data;
};
const listarCommentsxPubli = async (publi) => {
  const res = await instance.post("/comentario/getxPubli", {
    publi,
  });
  return res.data;
};
export {
  LoginUser,
  registerUser,
  userxId,
  CrearPubli,
  listarPublicaciones,
  listarPublicacionesxUser,
  CrearComment,
  listarCommentsxPubli,
};
