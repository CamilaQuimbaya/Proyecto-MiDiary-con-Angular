const express = require('express');

const router = express.Router()

const dailyController = require('../controllers/dailycontroller')

router.post('/daily', dailyController.crearDaily);
router.get('/daily', dailyController.consultarDailies)
router.get('/daily/:id',dailyController.consultarDaily)
router.put('/daily/:id', dailyController.actualizarDaily)
router.delete('/daily/:id', dailyController.eliminarDaily)

module.exports = router;
