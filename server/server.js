const express = require('express');
//const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.json());
//app.use(cors);

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);
