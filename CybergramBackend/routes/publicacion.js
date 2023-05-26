const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const {crearPublicacion, publication} = require('../Controllers/publicacionController');
const {validarCampos} = require('../middlewares/validar-campos')

router.get('/publication',publication)
router.post(
    '/newPublicacion',
    [
        check('photo', 'La foto es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearPublicacion)

module.exports = router;
