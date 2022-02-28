const mongoose = require('mongoose');

const dailySchema = mongoose.Schema({
    fecha:{
        type: Date,
        default: Date.now()
    },
    titulo: {
        type: String,
        require: true,
    },
    descripcion:{
        type: String,
        require: true
    },
    nota:{
        type: String,
        require:true
    },

});

module.exports = mongoose.model('daily', dailySchema)
