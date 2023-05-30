const express = require("express");
const router = express.Router();
const { ValidateUser } = require("../validators/checks");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
  userxId,
} = require("../Controllers/UserController");
const { validarJWT } = require("../middlewares/validar-token");

router.post("/LoginUser", loginUsuario);

router.post("/newUser", ValidateUser, crearUsuario);

router.post("/UserxId", userxId);

router.get("/renew", revalidarToken);

module.exports = router;
