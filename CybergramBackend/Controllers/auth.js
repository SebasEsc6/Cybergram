const express = require('express');
const { validationResult } = require('express-validator')

const crearUsuario = (req, res = express.request ) => {
    res.json({
        ok: true
    })
}

const loginUsuario = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

const revalidarToken = (req, res = express.request) => {
    res.json({
        ok:true
    })
}

module.exports = {
    loginUsuario,
    crearUsuario, 
    revalidarToken
}