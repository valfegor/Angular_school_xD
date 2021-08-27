const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
name:String,
ubication: String,
date: Date,
code:String,
date2:{ type: Date, default: Date.now },
Status:Boolean,
profesor_asigned:String,
});


const course = mongoose.model('course', coursesSchema);

module.exports = course;