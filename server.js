var express = require('express'),
mongoose = require('mongoose'),
helmet = require('helmet'),
cors = require('cors'),
bodyParser = require('body-parser'),
morgan = require('morgan');

var secret = require('./config/secret');

mongoose.connect(secret.database);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

var messageRoute = require('./route/message.route');

app.use(messageRoute);

app.listen(secret.port, function(){
    console.log("Server running on port 80");
});