const Jam = require('../models/jamModel');

exports.getAllJams = async (req, res) => {
    try {
        const jams = await Jam.find();
        res.status(200).json({
            results: jams.length,
            data: { 
                jams 
            }
        });
    } catch (err) {
        res.status(404).json({ 
            status: 'Failed', 
            message: err 
        });
    }
};

exports.getJamById = async (req, res) => {
    try {
        const jam = await Jam.findById(req.params.id);
        res.status(200).json({ 
            status: 'success', 
            data: { 
                jam 
            } 
        });
    } catch (err) {
        res.status(404).json({ 
            status: 'Failed', 
            message: err 
        });
    }
};

exports.createJam = async (req, res) => {
    try {
        const newJam = await Jam.create(req.body);
        res.status(201).json({ 
            status: 'success', 
            data: newJam 
        });
    } catch (err) {
        res.status(400).json({ 
            status: 'Failed', 
            message: err 
        });
    }
};

exports.updateJam = async (req, res) => {
    try {
        const jam = await Jam.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!jam) {
            return res.status(404).json({ 
                status: 'Failed', 
                message: 'Jam not found'
            });
        }
        res.status(200).json({ 
            status: 'success', 
            data: { 
                jam 
            } 
        });
    } catch (err) {
        res.status(400).json({ 
            status: 'Failed', 
            message: err 
        });
    }
};

exports.deleteJam = async (req, res) => {
    try {
        await Jam.findByIdAndDelete(req.params.id);
        res.status(204).json({ 
            status: 'success', 
            data: null 
        });
    } catch (err) {
        res.status(400).json({ 
            status: 'Failed', 
            message: err 
        });
    }
};

exports.getEfficiency = async (req, res) => {
    try {
        if (req.params.id && req.params.id !== 'efficiency') {
            return res.status(400).json({ 
                status: 'Failed', 
                message: 'Invalid request' 
            });
        }

        const jams = await Jam.find();
        if (!jams || jams.length === 0) {
            return res.status(404).json({ 
                status: 'Failed', 
                message: 'No jams found' 
            });
        }

        const efficiencies = jams.map(jam => {
            const batchSize = jam.batchSize || 0;
            const sugarAmount = jam.sugarAmount || 1;

            if (batchSize === 0) {
                return {
                    id: jam._id.toString(),
                    name: jam.name,
                    efficiencyScore: 0,
                    efficient: false
                };
            }

            const efficiencyScore = batchSize / sugarAmount;
            return {
                id: jam._id.toString(),
                name: jam.name,
                efficiencyScore: efficiencyScore,
                efficient: efficiencyScore > 5
            };
        });

        return res.status(200).json({ 
            status: 'success', 
            data: efficiencies 
        });
    } catch (err) {
        res.status(500).json({ 
            status: 'Failed', 
            message: err.message 
        });
    }
};