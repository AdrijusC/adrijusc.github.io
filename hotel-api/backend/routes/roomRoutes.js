
const express = require('express');
const roomController = require('../controllers/roomController');


const router = express.Router();

router.route('/')
    .get(roomController.getAllRooms)

router.route('/:id')
    .get(roomController.getRoomById)

router.get('/availability/checkin/:checkin/checkout/:checkout', roomController.checkRoomAvailability);

module.exports = router;
