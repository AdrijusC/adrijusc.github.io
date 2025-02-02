const express = require('express');
const morgan = require('morgan');

//Routes
const hotelRouter = require('./routes/hotelRoutes');

const app = express();
app.use(morgan('dev'));


app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use('/api/v1/hotels', hotelRouter);


module.exports = app;