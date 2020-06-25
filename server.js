'use strict';

const express = require('express');
const debug = require('debug')('test');

const app = express();
const PORT = 9090;


app.get('/', (req, res) => {
  return res.status(200).send({message: 'Ready!! v2.1'});
});


app.listen(PORT, () => {
  debug(`http://localhost:${PORT}`);
});

