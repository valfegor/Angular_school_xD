const Estudent = require('../models/estudent');
const Role = require('../models/role');
const bcrypt = require(bcrypt);

const registerEstudent = async (req,res)=>{
    if(!req.body.name || !req.body.email ||!req.body.adress || !req.body.parentName || !req.body.parentEmail || !req.body.estudentPhone || !req.body.parentPhone || !req.body.password) return res.status(400).send("Sorry check all the camps please");

    const existingUser = await Estudent.findOne({email:req.body.email});

    if(existingUser) return res.status(400).send("Sorry the user already exist");

    const hash = await bcrypt.hash(req.body.password,10);

    let role = await Role.findOne({name:"Estudent"});

    if(!role) return res.status(400).send("Sorry The role dont exist in the data base");

    let estudent = new Estudent({
        name: req.body.name,
        password:hash,
        email:req.body.email,
        adress:req.body.adress,
        parentName: req.body.parentName,
        parentEmail:req.body.parentEmail,
        estudentPhone: req.body.estudentPhone,
        parentPhone:req.body.parentPhone,
        roleId:role._id,
        dbStatus:true,
    })

    let result = await estudent.save();

    if(!result) return res.status(400).send("Sorry Cant save please try again");

    try {
        let jwtToken = user.generateJWT();
        return res.status(200).send({jwtToken});
    } catch (e) {
        return res.status(400).send("Sorry Please try again");
    }

}


module.exports = {registerEstudent}