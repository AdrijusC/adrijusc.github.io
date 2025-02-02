const express = require('express');
const morgan = require('morgan');
const jamRouter = require('./routes/jamRoutes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/api/v1/jams', jamRouter);

module.exports = app;
