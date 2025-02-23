const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Reservation must have a name']
    },
    address: {
        type: String,
        required: [true, 'Reservation must have an address']
    },
    city: {
        type: String,
        required: [true, 'Reservation must have a city']
    },
    zip: {
        type: String,
        required: [true, 'Reservation must have a zip code']
    },
    country: {
        type: String,
        required: [true, 'Reservation must have a country']
    },
    checkin: {
        type: Date,
        required: [true, 'Reservation must have a check-in date']
    },
    checkout: {
        type: Date,
        required: [true, 'Reservation must have a check-out date']
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: [true, 'Reservation must be linked to a room']
    },
    code: {
        type: String,
        required: [true, 'Reservation must have a confirmation code']
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Reservation', reservationSchema);
