const express = require('express');
const cors = require('cors');
require('dotenv').config();


app = express();

app.use(express.json());

const{Database_connect} = require('../backend/bd/bd');



app.use(cors());

app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))


Database_connect();