const express = require('express');
const router = express.Router();
const classroomController = require('../controller/classroomcontroller');

router.post('/registerClassroom',classroomController.registerClassRoom);

module.exports = router;