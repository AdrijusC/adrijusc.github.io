const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A hotel must have a name'],
        unique: true
    },
    address: {
        type: String,
        required: [true, 'A hotel must have an address']
    },
    rankingAverage: {
        type: Number,
        default: 4.5,
        min: [1, 'Ranking must be above 1.0'],
        max: [5, 'Ranking must be below 5.0']
    },
    room_price:{
        type: Number,
        required: [true, 'A hotel must have a room price']
    },
    price_discount:{
        type: Number
    },
    comfort:{
        type: String,
        required: [true, 'A hotel must have a comfort level'],
        enum:{
            values: ['1', '2', '3', '4', '5', '6', '7']
        }
    },
    summary:{
        type: String,
        trim: true,
        required: [true, 'A hotel must have a summary'],
    },
    image_cover:{
        type: String,
        required: [true, 'A hotel must have a cover image']
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        select: false
    }

})

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;