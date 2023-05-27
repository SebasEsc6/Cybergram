const { Schema, model } = require('mongoose');

const comentarioSchema = Schema({
    contentComment: { 
        type: String,
        require: true
    },   
    publicacion:{
        type : Schema.Types.ObjectId,
        ref: 'publicacion'
    },
    nameUser:{
        type : Schema.Types.ObjectId,
        ref: 'usuario'
    }
    
},{
    toJSON: {
        virtuals : true
    },
    toObject: {
        virtuals : true
    }
});

module.exports = model('comentario',comentarioSchema)