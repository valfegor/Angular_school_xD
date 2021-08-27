const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

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


estudentSchema.methods.generateJwt = function(){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        roleId: this.roleId,
        iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT

    )
    
}



const estudent = mongoose.model('estudent', estudentSchema);


module.exports = estudent;