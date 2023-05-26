const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../Models/usuario');

const crearUsuario = async (req, res = express.request ) => {
    const { name, email, password, followers, following } = req.body
    try {
        
        usuario  = new Usuario( req.body );
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        await usuario.save();

        res.status(200).json({
            ok: true, 
            name, email, password, followers, following
        })
    } catch(error){
        console.log( error )
        res.status(500).json({
            ok:false,
            error,
        })
    }   
}

const loginUsuario = async (req, res = express.request) => {

}


module.exports = {
    loginUsuario,
    crearUsuario, 
}