const Amigo = require('../models/Amigo')

exports.crearAmigo = async(req, res) => {
    try {
        let data_amigo;
        data_amigo = new Amigo(req.body);
        await data_amigo.save();
        res.send(data_amigo)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}

exports.consultarAmigos = async(req, res) => {
    try {
        const data_amigo = await Amigo.find();
        res.json(data_amigo)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}
exports.consultarAmigo = async(req, res) => {
    try {
        const data_amigo = await Amigo.findById(req.params.id);
        if(!data_amigo){
            res.status(404).json({msg: 'No se encontraron coincidencias'})
        }
        res.json(data_amigo)

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}

exports.actualizarAmigo = async(req, res) => {
    try {
        const {nombre, correo, telefono} = req.body
        let data_amigo = await Amigo.findById(req.params.id);

        if(!data_amigo){
            res.status(404).json({mensaje: 'No se encontraron coincidencias para la actualizacion'})
        }

        data_amigo.nombre = nombre;
        data_amigo.correo = correo;
        data_amigo.telefono = telefono;

        data_amigo = await Amigo.findOneAndUpdate({_id: req.params.id}, data_amigo, {new: true})
        res.json(data_amigo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}

exports.eliminarAmigo = async(req, res) => {
    try {
        const data_amigo = await Amigo.findById(req.params.id);
        if(!data_amigo){
            res.status(404).json({mensaje: 'No se encontraron coincidencias'})
        }
        await Amigo.findByIdAndRemove({_id: req.params.id});
        res.json({mensaje: 'Amigo eliminado correctamente'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}

