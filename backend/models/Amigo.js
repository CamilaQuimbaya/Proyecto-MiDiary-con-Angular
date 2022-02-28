const mongoose = require('mongoose');

const amigoSchema = mongoose.Schema({

    nombre: {
        type: String,
        require: true,
    },
    correo:{
        type: String,
        require: true
    },
    telefono:{
        type: String,
        require:true
    },

});

module.exports = mongoose.model('amigos', amigoSchema)

