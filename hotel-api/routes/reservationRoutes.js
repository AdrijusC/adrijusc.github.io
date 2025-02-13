const express = require('express');
const reservationController = require('../controllers/reservationController');

const router = express.Router();


router.route('/')
    .post(reservationController.getReservations);

router.route('/:id/cancel')
    .post(reservationController.cancelReservation);

router.post('/rooms/:id/reservation', reservationController.createReservation);

module.exports = router;