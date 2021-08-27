const mongoose = require("mongoose");

const estudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  adress: String,
  parentName: String,
  parentEmail: String,
  estudentPhone: String,
  parentPhone: String,
  password: String,
  roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});


const estudent = mongoose.model('estudent', estudentSchema);