const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { crearComentario} = require('../Controllers/comentarioController');
const {validarCampos} = require('../middlewares/validar-campos')


//router.get('/publication', publication)

router.post(
    '/comentario',
    [
        check('nameComment', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearComentario)




module.exports = router;