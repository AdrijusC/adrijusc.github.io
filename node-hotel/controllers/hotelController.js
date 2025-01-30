const fs = require('fs');

const hotels = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/hotels.json`)
);

//Middlewars

exports.checkID = (req, res, next, val) => {
    console.log(`Hotel id is: ${val}`);


    if (req.params.id * 1 > hotels.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    next();
}

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.address || !req.body.ranking || !req.body.room_price){
        return res.status(400).json({
            status: 'fail',
            message: 'Missing info'
        })
    }
    next();
}


//Get all hotels

exports.getAllHotels = (req, res) => {
    res.status(200).json({
        status: 'success',
        requested: req.requestTime,
        results: hotels.length,
        data: {
            hotels
        }
    })
}



//Get hotel by id 

exports.getHotel = (req, res) => {
    console.log("This is hotel");
    const id = req.params.id * 1;
    const hotel = hotels.find(hotel => hotel.id === id);

    res.status(200).json({
        status: 'success',
        data: {
            hotel
        }
    })
}


//Create Hotel

exports.createHotel = (req, res) => {
    console.log("Create hotel");
    const newId = hotels[hotels.length - 1].id + 1;
    const newHotel = Object.assign({id: newId}, req.body);

    hotels.push(newHotel);

    fs.writeFile(`${__dirname}/../data/hotels.json`, JSON.stringify(hotels), err => {
        res.status(201).json({
            status: 'success',
            data: {
                hotel: newHotel
            }
        })
    })
}

//Update hotel

exports.updateHotel = (req, res) => {
    console.log("Update hotel");
    res.status(200).json({
        status: 'success',
        data: {
            hotel: '<Updated hotel>'
        }
    })
}

//Delete hotel

exports.deleteHotel = (req, res) => {
    console.log("Delete hotel");
    res.status(204).json({
        status: 'success',
        data: null
    })
}