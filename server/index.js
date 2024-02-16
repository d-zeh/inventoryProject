const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const Database = ["shirt", "shoes", "pants", "wallet"]

// app.get('http://localhost:5500/api/inventory', (req,res)=> {
//     console.log(Database)
//     res.status(200).send(Database)
// })
console.log("hi")


//require not running 
const SERVER_PORT = '5500';
app.listen(SERVER_PORT,() => console.log(`up and running on ${SERVER_PORT}`)) 