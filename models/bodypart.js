var mongoose = require("mongoose");
var Promise = require("bluebird");
var bodyPartSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

var bodyParts = [
        {title: 'Chest', description: 'Chest'},
        {title: 'Biceps', description: 'Biceps'},
        {title: 'Triceps', description: 'Triceps'}
    ];

var BodyPart = mongoose.model('BodyPart', bodyPartSchema);

var createBodyPart = Promise.promisify(BodyPart.create, {context: BodyPart});

function findParts(query) {
    return Promise.cast(mongoose.model('BodyPart').find(query).exec());
}

exports.seedParts = function() {
    return findParts({}).then(function(collection) {
        if (collection.length === 0) {
            return Promise.map(bodyParts, function(bodyPart) {
                return createBodyPart(bodyPart);
            });
        }
    });
}