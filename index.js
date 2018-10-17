'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const api = require('./routers/api');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/calculadora', api);

app.get('/', (req, res) => {
    res.send('CALCULADORA');
});

app.listen(PORT, () => {
    console.log('Server runing on localhost:' + PORT);
});