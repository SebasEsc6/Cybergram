const express = require("express");
const Publicacion = require("../Models/publicacionScheme");

const crearPublicacion = async (req, res = express.request) => {
  const publicacion = new Publicacion(req.body);
  try {
    publicacion.user = req.uid;
    publicacion.nameUser = req.name;
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
  const { user } = req.body;
  const publicaciones = await Publicacion.find({ user: user });
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
