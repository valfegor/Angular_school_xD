const express = require('express');

const router = express.Router();


const courseController = require('../controller/coursescontroller');

router.post('/registerCourse',courseController.registerCourses);

module.exports = router;