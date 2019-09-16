const express = require('express');
const router = express.Router();

const ClientController = require('./controllers/ClientController');

router.get('/client', ClientController.index);
router.get('/client/:id', ClientController.show);
router.post('/client', ClientController.store);
router.put('/client/:id', ClientController.update);
router.delete('/client/:id', ClientController.destroy);

module.exports = router;
