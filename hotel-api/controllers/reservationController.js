const Reservation = require('../models/reservationModel');
const Room = require('../models/roomModel');

exports.getReservations = async (req, res) => {
    try {
        const { code, name } = req.body;
        if (!code && !name) {
            return res.status(401).json({ 
                error: "Unauthorized" 
            });
        }

        let query = {};
        if (code) query.code = code;
        if (name) query.name = name;

        const reservations = await Reservation.find(query)
            .sort({ checkin: 1 })
            .populate('roomId');

        if (!reservations || reservations.length === 0) {
            return res.status(401).json({ 
                error: "Unauthorized" 
            });
        }

        const formattedReservations = reservations.map(reservation => ({
            id: reservation._id,
            code: reservation.code,
            name: reservation.name,
            created_at: reservation.created_at.toISOString(),
            reservation_information: {
                id: reservation._id,
                checkin: reservation.checkin.toISOString(),
                checkout: reservation.checkout.toISOString(),
                room: {
                    id: reservation.roomId?._id,
                    number: reservation.roomId?.number
                }
            }
        }));

        res.status(200).json({ 
            reservations: formattedReservations 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            error: 'Server Error', 
            message: err.message 
        });
    }
};

exports.createReservation = async (req, res) => {
    try {
        const { name, address, city, zip, country, checkin, checkout } = req.body;
        const roomId = req.params.id;
        const errors = {};

        if (!name || typeof name !== 'string') errors.name = "Name is required and must be a string.";
        if (!city || typeof city !== 'string') errors.city = "City is required and must be a string.";
        if (!zip || typeof zip !== 'string') errors.zip = "Zip is required and must be a string.";


        if (Object.keys(errors).length > 0) {
            return res.status(422).json({ 
                error: 'Validation failed', 
                fields: errors 
            });
        }

        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ 
                error: 'A room with this ID does not exist' 
            });
        }

        const reservation = new Reservation({
            name, address, city, zip, country, checkin, checkout,
            roomId: room._id,
            code: Math.random().toString(36).substring(2, 12).toUpperCase(),
            created_at: new Date()
        });

        await reservation.save();

        res.status(201).json({
            reservations: [
                {
                    id: reservation._id,
                    code: reservation.code,
                    name: reservation.name,
                    created_at: reservation.created_at.toISOString(),
                    reservation_information: {
                        id: reservation._id,
                        checkin: reservation.checkin.toISOString(),
                        checkout: reservation.checkout.toISOString(),
                        room: {
                            id: room._id,
                            number: room.number
                        }
                    }
                }
            ]
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            error: 'Server Error', 
            message: err.message 
        });
    }
};

exports.cancelReservation = async (req, res) => {
    try {
        const { code, name } = req.body;
        const reservationId = req.params.id;

        if (!code || !name) {
            return res.status(401).json({ 
                error: "Unauthorized" 
            });
        }

        const reservation = await Reservation.findById(reservationId);
        if (!reservation) {
            return res.status(404).json({ 
                error: "A reservation with this ID does not exist" 
            });
        }

        if (reservation.code !== code || reservation.name !== name) {
            return res.status(401).json({ 
                error: "Unauthorized" 
            });
        }

        await Reservation.findByIdAndDelete(reservationId);

        res.status(204).json({ 
            message: "success" 
        });
    } catch (err) {
        res.status(500).json({ 
            error: "Server Error", 
            message: err.message 
        });
    }
};