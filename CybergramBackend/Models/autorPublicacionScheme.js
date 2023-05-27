const { Schema, model } = require('mongoose');

const autorPublicacionScheme = Schema({
    lugar: { 
        type: String,
        require: true
    },
    fecha: { 
        type:String,
        require: true
    },
    user:{
        type : Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    name:{
        type : Schema.Types.ObjectId,
        ref: 'Usuario'
    }

},{
    toJSON: {
        virtuals : true
    },
    toObject: {
        virtuals : true
    }
});

module.exports = model('autorPublicacion',autorPublicacionScheme)