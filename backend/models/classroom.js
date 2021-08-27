const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    ubication: String,
    code: String,
    capacity:Number,
    name:String,
    proffesor_id:{ type: mongoose.Schema.ObjectId, ref: "master" },
    date: { type: Date, default: Date.now },
    dbStatus: Boolean,
})


const classroom = mongoose.model('classroom', classroomSchema);


module.exports =classroom;