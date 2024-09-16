// models/Component.js
const mongoose = require('mongoose');

const locationsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    manufacturer: { type: String, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Locations', locationsSchema)