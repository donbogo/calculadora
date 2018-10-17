'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('CALCULADORA API ROUTER');
});

router.get('/sum/*', (req, res) => {
    let result = 0;
    let datos = req.path.split('/');
    if (datos && datos.length >= 4) {
        for (let i = 2; i < datos.length; i++) {
            if (isNaN(datos[i])) {
                return res.status(400).send('Bad Request error');
            }
            result = result + Number(datos[i]);
        }
        res.status(200).send(`El resultado de la suma es: ${result}`);
    } else {
        res.status(400).send('Bad Request error');
    }
});

router.get('/res/*', (req, res) => {
    let result = null;
    let datos = req.path.split('/');
    if (datos && datos.length >= 4) {
        for (let i = 2; i < datos.length; i++) {
            if (isNaN(datos[i])) {
                return res.status(400).send('Bad Request error');
            } else if (!result) {
                result = Number(datos[i]);
            } else {
                result = result - Number(datos[i]);
            }
        }
        res.status(200).send(`El resultado de la resta es: ${result}`);
    } else {
        res.status(400).send('Bad Request error');
    }
});

router.get('/mul/*', (req, res) => {
    let result = 1;
    let datos = req.path.split('/');
    if (datos && datos.length >= 4) {
        for (let i = 2; i < datos.length; i++) {
            if (isNaN(datos[i])) {
                return res.status(400).send('Bad Request error');
            }
            result = result * Number(datos[i]);
        }
        res.status(200).send(`El resultado de la multiplicación es: ${result}`);
    } else {
        res.status(400).send('Bad Request error');
    }
});

router.get('/div/:dividendo/:divisor', (req, res) => {
    let result = 0;
    let dividendo = req.params['dividendo'];
    let divisor = req.params['divisor'];
    if (divisor == 0 || isNaN(dividendo) || isNaN(divisor)) {
        res.status(400).send('Bad Request error');
    } else {
        result = Number(dividendo) / Number(divisor);
        res.status(200).send(`El resultado de la división es: ${result}`);
    }
});

module.exports = router;