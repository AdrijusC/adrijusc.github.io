const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'A review is needed']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, 'Rating is needed']
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: [true, 'Review must belong to a hotel']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'You must select user']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

reviewSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'hotel',
        select: 'name'
    }).populate({
        path: 'user',
        select: 'name'
    })
    next()
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review;