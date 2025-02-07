const express = require('express');
const morgan = require('morgan');

//Routes
const hotelRouter = require('./routes/hotelRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes')

const app = express();
app.use(morgan('dev'));


app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/reviews', reviewRoutes);


module.exports = app;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTA3NTZlNzE4N2U1OGI5NDU0NmJiNiIsImlhdCI6MTczODU2OTA3MSwiZXhwIjoxNzM4NTY5MzcxfQ.rwDNHer-tPvaKn3ylitVqRXy0jz7ZXaJugNr_0leVEk