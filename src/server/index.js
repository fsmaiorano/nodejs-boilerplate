const cors = require('./cors');
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

consign({cwd: 'src'})
    .then('configs')
    .then('api/controllers')
    .then('api/routes')
    .then('services')
    .into(app);

module.exports = app;
