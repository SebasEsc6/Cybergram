const express = require("express");
const Publicacion = require("../Models/publicacionScheme");

const crearPublicacion = async (req, res = express.request) => {
  const publicacion = new Publicacion(req.body);

  try {
    publicacion.user = req.uid;
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

module.exports = {
  crearPublicacion,
};
