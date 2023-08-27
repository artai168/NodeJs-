const express = require('express');
const router = express.Router();

const alertController = require('../Controller/AlertController');

router.post( '/',  alertController.index );

module.exports = router;