const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../Controllers/UserController');
const {validarCampos} = require('../middlewares/validar-campos')
const {emailExiste} = require('../helpers/db_validators')


router.get('/LoginUser', loginUsuario)

router.post(
    '/newUser',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('email').custom(emailExiste),
        check('password', ).isLength({min:6}),
        validarCampos
    ],
    crearUsuario)

router.get('/renew')


module.exports = router;