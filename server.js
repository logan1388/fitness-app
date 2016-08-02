var express = require('express');
var mongoose = require('mongoose');
var bodyPartModel = require('./models/bodypart');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/bodyparts', function(req, res) {
    mongoose.model('BodyPart').find({}).exec(function(error, collection) {
        res.send(collection);
    })
});

app.get('*', function(req, res) {
   res.render('index'); 
});

//mongoose.connect('mongodb://localhost/fitnesstracker');
mongoose.connect('mongodb://power:power@ds139705.mlab.com:39705/fitnesstracker'); 
var con = mongoose.connection;

con.once('open', function() {
    console.log("connected to mongodb successfully!")
    bodyPartModel.seedParts();
});

app.listen(process.env.PORT, process.env.IP);