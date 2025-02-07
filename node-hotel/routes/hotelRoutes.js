const express = require('express');
const hotelController = require('./../controllers/hotelController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./reviewRoutes')

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

router.use('/:hotelId/reviews', reviewRouter)
module.exports = router;