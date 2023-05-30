const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-token");
const {
  crearPublicacion,
  listarPublicaciones,
  listarPublixUser,
} = require("../Controllers/publicacionController");
const { validarCampos } = require("../middlewares/validar-campos");

//router.use(validarJWT);

router.post(
  "/newPublicacion",
  validarJWT,
  [check("photo", "La foto es obligatoria").not().isEmpty(), validarCampos],
  crearPublicacion
);

router.get("/listarPubli", listarPublicaciones);
router.get("/listarPublixUser", listarPublixUser);

module.exports = router;
