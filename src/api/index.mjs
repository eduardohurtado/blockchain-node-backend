import express from 'express';

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World from express');
});

app.listen(8080);
