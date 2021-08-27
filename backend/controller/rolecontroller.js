const Role = require('../models/role');


const registerRole = async (req,res) => {
    if(!req.body.name || !req.body.description) return res.status(400).send("Sorry please use all the camps");

    let existingRole = await Role.findOne({name:req.body.name});

    if(existingRole) return res.status(400).send("Role already exists");

    const role = new Role({
        name: req.body.name,
        description: req.body.description,
        Status:true,
    })


    const result = await role.save();

    if(!result) return res.status(400).send("Cant save please try again");

    return res.status(200).send({role});
}


module.exports = {registerRole}