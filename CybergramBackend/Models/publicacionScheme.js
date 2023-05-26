const { Schema , model } = require('mongoose');

const publicacionSchema = Schema({

    photo:{
        type: String,
        requiere: true
    },

    likes:{
        type: String,
        require:true
    },
    user:{
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

module.exports = model(publicacionSchema)