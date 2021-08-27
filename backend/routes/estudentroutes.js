const express = require('express');

const router = express.Router();

const estudentController = require('../controller/estudentcontroller');

router.post('/registerEstudent',estudentController.registerEstudent);


module.exports = router;