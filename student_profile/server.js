const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const studentRoutes = express.Router();
const student = require('./model/student.model');

const routes = require('./Routes/student.route');

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb+srv://sakshishingala05:sakshi@cluster0.ruclvfv.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("DB connected......")
})

app.use(studentRoutes);

app.listen(8080,()=>{
    console.log("Server is running on 8080....");
});