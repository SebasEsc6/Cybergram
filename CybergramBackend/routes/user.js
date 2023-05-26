const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../Controllers/UserController');
const {validarCampos} = require('../middlewares/validar-campos')


router.get('/LoginUser', loginUsuario)

router.post(
    '/newUser',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password', ).isLength({min:6}),
        validarCampos
    ],
    crearUsuario)

router.get('/renew')


module.exports = router;