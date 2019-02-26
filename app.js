const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/product.route'); 
const cors = require('cors');
const app = express();

// Insert db credentials below  
let dev_db_url = 'mongodb://someuser:usersome1@ds161144.mlab.com:61144/productstutorial';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
const config = {
    autoIndex: false,
    useNewUrlParser: true,
  };

mongoose.connect(mongoDB, config);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});