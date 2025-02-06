const express = require('express');
const hotelController = require('./../controllers/hotelController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(authController.protect, hotelController.getAllHotels)
    .post(hotelController.createHotel)
    
router
    .route('/:id')
    .get(hotelController.getHotel)
    .patch(hotelController.updateHotel)
    .delete(hotelController.deleteHotel)

module.exports = router;