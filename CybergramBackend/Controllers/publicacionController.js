const express = require("express");
const Publicacion = require("../Models/publicacionScheme");

const crearPublicacion = async (req, res = express.request) => {
  const { photo, likes, uid, nameUser, lugar } = req.body;
  try {
    const user = uid;
    const publicacion = new Publicacion({
      photo: photo,
      likes,
      user,
      nameUser,
      lugar,
    });
    const saved = await publicacion.save();
    res.status(200).json({
      ok: true,
      publicacion: saved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      publicacion: "Internal error",
    });
  }
};

const listarPublicaciones = async (req, res = express.request) => {
  try {
    let publicacion = await Publicacion.find();

    res.status(200).json({
      publicacion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
};
const listarPublixUser = async (req, res = express.request) => {
  const { uid } = req.body;
  const publicaciones = await Publicacion.find({ user: uid });
  try {
    res.status(200).json({
      ok: true,
      publicaciones,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      ok: false,
      msg: "Error Interno",
    });
  }
};

module.exports = {
  crearPublicacion,
  listarPublicaciones,
  listarPublixUser,
};
