const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const moment = require("moment");

const masterSchema = new mongoose.Schema({
    name:String,
    phone: String,
    adress: String,
    expertise: String,
    email: String,
    password: String,
    roleId: { type: mongoose.Schema.ObjectId, ref: "role" },
    date: { type: Date, default: Date.now },
    dbStatus: Boolean,

})

masterSchema.methods.generateJWT = function () {
    return jwt.sign(
        {
          _id: this._id,
          name: this.name,
          roleId: this.roleId,
          iat: moment().unix(),
        },
        process.env.SECRET_KEY_JWT
      );
}

const master = mongoose.model('master', masterSchema);

module.exports = master;