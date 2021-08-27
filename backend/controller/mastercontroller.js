const Master = require("../models/master");
const bcrypt = require("bcrypt");
const Role = require('../models/role');

const registerMaster = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.phone ||
    !req.body.adress ||
    !req.body.expertise ||
    !req.body.email ||
    !req.body.password
  )
    return res.status(400).send("Sorry Use all the camps please");

    let existingMaster = await Master.findOne({email:req.body.email});

    if(existingMaster) return res.status(400).send("Sorry That email already exist");

    let hash = await bcrypt.hash(req.body.password,10);

    let role = await Role.findOne({name:"master"});

    if(!role) return res.status(400).send("Sorry Please creathe the role");

    let master = new Master({
        name: req.body.name,
        phone: req.body.phone,
        adress: req.body.adress,
        expertise: req.body.expertise,
        email: req.body.email,
        password:hash,
        roleId:role._id
    });

    let result = await master.save();

    if(!result) return res.status(400).send("Cant save");

    try {
        let jwtToken = master.generateJWT();
        return res.status(200).send({jwtToken})
    } catch (e) {
        return res.status(400).send('Sorry try again');
    }
};



module.exports = {registerMaster}