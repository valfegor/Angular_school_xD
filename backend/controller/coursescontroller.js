const Courses = require('../models/courses');
const Classroom = require('../models/classroom');

const registerCourses = async (req, res) => {
    if(!req.body.name || !req.body.ubication || !req.body.date) return res.status(400).send("Sorry check all the camps please.");

    let existingName = await Courses.findOne({name: req.body.name});

    if(existingName) return res.status(400).send("Sorry the class its already created.");

    let ubication = await Classroom.findOne({ubication: req.body.ubication});

    console.log(ubication)

    if(!ubication) return res.status(400).send("Sorry The Classroom its not Asigned please check");

    let course = new Courses({
        name: req.body.name,
        ubication: ubication.ubication,
        date: req.body.date,
        profesor_asigned:ubication.name
    });

    let result = await course.save();

    if(!result) return res.status(400).send("Sorry Cant save the course.");


    return res.status(200).send({course});
}

module.exports = {registerCourses}