const express = require('express');

const playersModel = require('../api/players/players-model');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({message: 'server is running'});
});

server.get('/players', (req, res) => {
  playersModel.get()
    .then(players => {
      res.status(200).json(players);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;