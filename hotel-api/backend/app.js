const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const roomRouter = require('./routes/roomRoutes');
const reservationRouter = require('./routes/reservationRoutes');

const app = express();
const PORT = process.env.PORT || 5001;


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());


app.use('/module-b/api/v1/rooms', roomRouter);
app.use('/module-b/api/v1/reservations', reservationRouter);

module.exports = app;
