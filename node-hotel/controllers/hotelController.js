
const Hotel = require('./../models/hotelModel')
const APIFeatures = require('./../utilities/apiTools')


//Middleware




//Get all hotels

exports.getAllHotels = async (req, res) => {
    try{
        const hotelsData = new APIFeatures(Hotel.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()

        const hotels = await hotelsData.query;
        res.status(200).json({
            results: hotels.length,
            data: {
                hotels
            }
        })
    } catch(err){
        res.status(404).json({
            status: 'Failed',
            message: err
        })
    }
}



//Get hotel

exports.getHotel = async (req, res) => {
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                hotel
            }
        })
    } catch(err){
        res.status(404).json({
            status: 'Failed',
            message: err
        })
    }
}


//Create Hotel

exports.createHotel = async (req, res) => {
    try{
        const newHotel = await Hotel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: newHotel
        })
    } catch(err){
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

//Update hotel

exports.updateHotel = async (req, res) => {
    try {
        console.log('Update Hotel:', req.params.id, req.body);
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!hotel) {
            return res.status(404).json({
                status: 'Failed',
                message: 'Hotel not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                hotel
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        });
    }
};

//Delete hotel

exports.deleteHotel = async (req, res) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch(err){
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}