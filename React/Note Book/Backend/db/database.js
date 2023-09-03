const mongoose = require('mongoose');
const { database } = require('../config');

mongoose.connect(database, {}).then(() => {
    console.log('Connected to Database')
}).catch(() => {
    console.log(error)
});


