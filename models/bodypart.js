var mongoose = require('mongoose');

var bodyPartSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

var BodyPart = mongoose.model('BodyPart', bodyPartSchema);

exports.seedParts = function() {
    BodyPart.find({}).exec(function(error, collection) {
        if (collection.length === 0) {
            BodyPart.create({title: 'Chest', description: 'Chest'});
            BodyPart.create({title: 'Biceps', description: 'Biceps'});
            BodyPart.create({title: 'Triceps', description: 'Triceps'});
        }
    })
}