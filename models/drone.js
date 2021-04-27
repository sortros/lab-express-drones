const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema({
    name: {type: String},
    propeller: {type: Number},
    maxSpeed: {type: Number}
})

module.exports = model('Drone', droneSchema);