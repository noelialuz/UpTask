const express = require('express');
const router = express.Router();

//importar el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function() {
    
//ruta para el home
router.get('/', proyectosController.proyectoshome); 
router.get('/nosotros', proyectosController.nosotros );

return router;

}

