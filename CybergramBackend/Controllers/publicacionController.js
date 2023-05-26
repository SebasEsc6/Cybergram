const express = require('express');
const publicacion = require('../Models/publicacionScheme');


const crearPublicacion = async(req, res = express.request) => {
    const { photo, likes} = req.body
    try {

        Publicacion = new publicacion(rq.body);

        await publicacion.save();

        res.status(200).json({
            ok: true,
            photo,likes
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            error,
        })
    }
}
const publication = async(req,res = express.request) =>{}

module.exports = {
    crearPublicacion,
    publication,
}