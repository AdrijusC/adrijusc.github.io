const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    number: {
        type: String,
        required: [true, 'A room must have a number']
    },
    capacity: {
        type: String,
        required: [true, 'A room must have set capacity']
    },
    floor: {
        type: String,
        required: [true, 'A floor must be set']
    },
    room_image: {
        type: String,
        required: [true, 'A room must have an image']
    },
    price: {
        type: String,
        required: [true, 'A room must have a price']
    },
    wifi: {
        type: Boolean,
        required: [true, 'Wifi availability must be set']
    },
    parking: {
        type: Boolean,
        required: [true, 'Parking availability must be set']
    },
    breakfast: {
        type: Boolean,
        required: [true, 'Breakfast availability must be set']
    },
    reservations: [{
        checkin: {
            type: Date,
            required: [true, 'Reservation must have a check-in date']
        },
        checkout: {
            type: Date,
            required: [true, 'Reservation must have a check-out date']
        }
    }]
});

module.exports = mongoose.model('Room', roomSchema);