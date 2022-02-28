const express = require('express');

const router = express.Router()

const dailyController = require('../controllers/dailycontroller')
const amigoController = require('../controllers/amigocontroller')


router.post('/daily', dailyController.crearDaily);
router.get('/daily', dailyController.consultarDailies)
router.get('/daily/:id',dailyController.consultarDaily)
router.put('/daily/:id', dailyController.actualizarDaily)
router.delete('/daily/:id', dailyController.eliminarDaily)

router.post('/amigos', amigoController.crearAmigo);
router.get('/amigos', amigoController.consultarAmigos)
router.get('/amigos/:id', amigoController.consultarAmigo)
router.put('/amigos/:id', amigoController.actualizarAmigo)
router.delete('/amigos/:id', amigoController.eliminarAmigo)


module.exports = router;
