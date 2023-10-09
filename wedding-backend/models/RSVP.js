const mongoose = require('mongoose');

const RSVPschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requird: true
    },
    attending: {
        type: Boolean,
        required: true
    },
    message: String
});

module.exports = mongoose.model('RSVP',RSVPschema);