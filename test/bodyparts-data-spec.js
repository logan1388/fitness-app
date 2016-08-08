var expect = require("chai").expect;
var mongoose = require("mongoose");
var bodyPartModel = require("../models/bodypart");
var Promise = require("bluebird");

function resetBodyParts() {
    return new Promise(function(resolve,reject) {
        mongoose.connection.collections['bodyparts'].drop(resolve, reject);
    }); 
}

var connectDB = Promise.promisify(mongoose.connect, {context: mongoose});

function findParts(query) {
    return Promise.cast(mongoose.model('BodyPart').find(query).exec());
}

describe("get body parts", function() {
    
    var bodyParts;
    
    before(function(done) {
        connectDB('mongodb://localhost/fitnesstracker')
            .then(resetBodyParts)
            .then(bodyPartModel.seedParts)
            .then(findParts)
            .then(function(collection) {
                bodyParts = collection;
                done();
        });
    });
    
    it("should never be empty since parts are seeded", function() {
        expect(bodyParts.length).to.be.at.least(1);
    });
    it("should have a body part with a title", function() {
        expect(bodyParts[0].title).to.not.be.empty;
    });
});