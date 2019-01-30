const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Imports routes for  products
const product = require('./routes/product.route'); 
const app = express();

// Insert db pass here 
let dev_db_url = 'mongodb://someuser:usersome1@ds161144.mlab.com:61144/productstutorial';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});