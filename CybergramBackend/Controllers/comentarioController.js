const express = require('express');
const Comment = require('../Models/comentarioScheme');

const crearComentario = async (req, res = express.request ) => {
    const { nameComment } = req.body
    try {
        
        usuarioComentario  = new Comment( req.body );
        await usuarioComentario.save();

        res.status(200).json({
            ok: true,
            nameComment
        })
    } catch(error){
        console.log( error )
        res.status(500).json({
            ok:false,
            error,
        })
    }   
}
module.exports = {
    crearComentario 
}