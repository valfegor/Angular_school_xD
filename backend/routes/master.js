const express = require('express');

const router = express.Router();

const masterController = require('../controller/mastercontroller');

router.post('/registerTutor',masterController.registerMaster);

