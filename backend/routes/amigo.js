const express = require('express');
const router = express.Router();

const amigoController = require('../controllers/amigocontroller')

router.post('/amigos', amigoController.crearAmigo);
router.get('/amigos', amigoController.consultarAmigos)
router.get('/amigos/:id', amigoController.consultarAmigo)
router.put('/amigos/:id', amigoController.actualizarAmigo)
router.delete('/amigos/:id', amigoController.eliminarAmigo)

module.exports = router;
