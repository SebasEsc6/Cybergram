const express = require("express");
const router = express.Router();
const { ValidateUser } = require("../validators/checks");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../Controllers/UserController");

router.post("/LoginUser", loginUsuario);

router.post("/newUser", ValidateUser, crearUsuario);

router.get("/renew", revalidarToken);

module.exports = router;
