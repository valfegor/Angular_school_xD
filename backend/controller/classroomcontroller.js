const Classroom = require("../models/classroom");
const Master = require("../models/master");

const registerClassRoom = async (req, res) => {
  if (
    !req.body.ubication ||
    !req.body.code ||
    !req.body.capacity ||
    !req.body.name
  )
    return res.status(400).send("Sorry Check all the camps");
    if(req.body.capacity<0) return res.status(400).send("Sorry You cant put negative values")

  existingCode = await Classroom.findOne({ code: req.body.code });

  if (existingCode) return res.status(400).send("Sorry The code already exist");

  const master = await Master.findOne({ name: req.body.name });

  if (!master) return res.status(400).send("Sorry the master dont exist");

  

  const classroom = new Classroom({
    ubication: req.body.ubication,
    code: req.body.code,
    capacity: req.body.capacity,
    name: master.name,
    proffesor_id: master._id,
    dbStatus: true,
  });


  let result = await classroom.save();

  if(!result) return res.status(400).send("Sorry cant save");

  return res.status(200).send({classroom});
};


module.exports={registerClassRoom}