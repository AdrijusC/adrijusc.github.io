const express = require('express');
const jamController = require('../controllers/jamController');

const router = express.Router();

router.route('/')
    .get(jamController.getAllJams)
    .post(jamController.createJam);

router.get('/efficiency', jamController.getEfficiency);

router.route('/:id')
    .get(jamController.getJamById)
    .patch(jamController.updateJam)
    .delete(jamController.deleteJam);

module.exports = router;
