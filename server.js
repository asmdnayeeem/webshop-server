const express = require('express');
const app = express();
const mongoose=require('mongoose');
const cors=require('cors')
const parser = require('body-parser');
app.use(parser.json())
app.use(cors())
app.use(express.json())
require("dotenv").config();
mongoose.connect(process.env.SERVER).then(()=>console.log("connected to database")).catch(err=>console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(process.env.PORT, () => {
  console.log('Example app listening');
});