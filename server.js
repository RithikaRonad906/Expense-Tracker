const express = require('express');
const dbConnect = require('./dbConnect')
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Node JS Server started at port ${port}!`));
