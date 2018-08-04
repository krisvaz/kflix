const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const SeriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    vidFile: {
        type: String,
        required: true
    }
});

module.exports = Series = mongoose.model('series', SeriesSchema);