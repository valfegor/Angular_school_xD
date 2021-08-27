const express = require('express');
const cors = require('cors');
require('dotenv').config();


app = express();

app.use(express.json());
app.use(cors());

const Role = require('../backend/routes/roleroutes');
const Estudent = require('./routes/estudent');
const Master = require('./routes/master');
const Classroom = require('./routes/classroom');
app.use('/api/role',Role);
app.use('/api/estudent',Estudent);
app.use('/api/master',Master);
app.use('/api/classroom',Classroom);
const{Database_connect} = require('../backend/bd/bd');


app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))


Database_connect();