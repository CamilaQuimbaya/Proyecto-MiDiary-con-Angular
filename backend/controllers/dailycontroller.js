const Daily = require('../models/Daily')

exports.crearDaily = async(req, res) => {
    try {
        let data_daily;
        data_daily = new Daily(req.body);
        await data_daily.save();
        res.send(data_daily)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}

exports.consultarDailies = async(req, res) => {
    try {
        const data_daily = await Daily.find();
        res.json(data_daily)
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}
exports.consultarDaily = async(req, res) => {
    try {
        const data_daily = await Daily.findById(req.params.id);
        if(!data_daily){
            res.status(404).json({msg: 'No se encontraron coincidencias'})
        }
        res.json(data_daily)

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}

exports.actualizarDaily = async(req, res) => {
    try {
        const {titulo, descripcion, nota} = req.body
        let data_daily = await Daily.findById(req.params.id);

        if(!data_daily){
            res.status(404).json({mensaje: 'No se encontraron coincidencias para la actualizacion'})
        }

        data_daily.titulo = titulo;
        data_daily.descripcion = descripcion;
        data_daily.nota = nota;

        data_daily = await Daily.findOneAndUpdate({_id: req.params.id}, data_daily, {new: true})
        res.json(data_daily);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}

exports.eliminarDaily = async(req, res) => {
    try {
        const data_daily = await Daily.findById(req.params.id);
        if(!data_daily){
            res.status(404).json({mensaje: 'No se encontraron coincidencias'})
        }
        await Daily.findByIdAndRemove({_id: req.params.id});
        res.json({mensaje: 'Daily eliminado correctamente'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups.. Hay un error, comunicate con soporte')
    }
}
