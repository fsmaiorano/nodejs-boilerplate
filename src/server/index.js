const cors = require('./cors');
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors);

consign()
    .include('src/configs')
    .include('src/routes')
    .include('src/controllers')
    .into(server);

module.exports = server;