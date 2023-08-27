// Send Alert light
const express = require('express');
const router = express.Router();

//const alertController = require('../Controller/AlertController');
//router.post( '/',  alertController.index );

const usblightController = require('../Controller/LightActionController');
router.post('/', usblightController.Light_On);
router.get('/Off', usblightController.Light_Off);

module.exports = router;