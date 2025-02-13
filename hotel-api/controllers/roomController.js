
const Room = require('../models/roomModel');

exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find().sort({ number: 1 });
        res.status(200).json({
            results: rooms.length,
            data: { 
                rooms 
            }
        });
    } catch (err) {
        res.status(500).json({ 
            error: 'Server Error' 
        });
    }
};

exports.getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ 
                error: 'A room with this ID does not exist' 
            });
        }
        res.status(200).json({ 
            status: 'success', 
            data: { 
                room 
            } 
        });
    } catch (err) {
        res.status(404).json({ 
            error: "A room with this ID does not exist" 
        });
    }
};

exports.checkRoomAvailability = async (req, res) => {
    try {
        const checkinDate = new Date(req.params.checkin);
        const checkoutDate = new Date(req.params.checkout);

        if (isNaN(checkinDate) || isNaN(checkoutDate)) {
            return res.status(404).json({ 
                error: 'Bad checkin date format or date not provided' 
            },
            { 
                error: "Bad checkout date format or date not provided" 
            });
        }

        const availableRooms = await Room.find({
            reservations: {
                $not: {
                    $elemMatch: {
                        checkin: { $lt: checkoutDate },
                        checkout: { $gt: checkinDate }
                    }
                }
            }
        });

        const response = availableRooms.map(room => ({
            id: room._id,
            number: room.number,
            availability: true
        }));

        res.status(200).json({ 
            rooms: response 
        });
    } catch (err) {
        res.status(500).json({ 
            error: 'Server Error' 
        });
    }
};
