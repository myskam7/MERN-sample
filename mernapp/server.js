'use strinct'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.port || 3001;

app.use(bodyParser.urlencoded({ exteded: true}));
app.use(bodyParser.json());










app.listen(port, () => {
    console.log('connected to port ' + port);
});