const express = require('express');

const router = express.Router();

const roleController = require('../controller/rolecontroller');

router.post('/registerRole',roleController.registerRole);

module.exports = router;