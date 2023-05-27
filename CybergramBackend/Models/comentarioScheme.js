const { Schema, model } = require('mongoose');

const comentarioSchema = Schema({
    nameComment: { 
        type: String,
        require: true
    },   
    publicacion:{
        type : Schema.Types.ObjectId,
        ref: 'publicacion'
    },
},{
    toJSON: {
        virtuals : true
    },
    toObject: {
        virtuals : true
    }
});

module.exports = model('comentario',comentarioSchema)