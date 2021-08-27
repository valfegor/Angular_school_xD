const express = require('express');
const cors = require('cors');
require('dotenv').config();


app = express();

app.use(express.json());

const Role = require('../backend/routes/roleroutes');
const Estudent = require('../backend/routes/estudentroutes');
app.use('/api/role',Role);
app.use('/api/estudent',Estudent);

const{Database_connect} = require('../backend/bd/bd');



app.use(cors());

app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))


Database_connect();