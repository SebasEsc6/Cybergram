const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { crearAutorPublicacion } = require('../Controllers/autorPublicacionController');
const {validarCampos} = require('../middlewares/validar-campos')



router.post(
    '/AutorPublicacion',
    [
        check('lugar', 'El lugar es obligatorio').not().isEmpty(),
        check('fecha', 'La fecha es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearAutorPublicacion)

module.exports = router;