const express = require('express');
const autorpublicacion = require('../Models/autorPublicacionScheme');


const crearAutorPublicacion = async(req, res = express.request) => {
    const { lugar, fecha} = req.body
    try {

        AutorPublicacion = new autorpublicacion(rq.body);

        await AutorPublicacion.save();

        res.status(200).json({
            ok: true,
            lugar, fecha
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            error,
        })
    }
}


module.exports = {
    crearAutorPublicacion
}