const express = require('express');
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//pozwolenie na wysyłanie requestów z innych domen
app.use(cors());

//routes
app.use('/api', apiRouter);



//server
app.listen(port, function(){
    console.log(`Serwer słucha na porcie ${port}`)
});