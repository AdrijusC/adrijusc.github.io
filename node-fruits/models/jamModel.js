const mongoose = require('mongoose');

const jamSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    fruitType: { 
        type: String, 
        required: true
    },
    batchSize: { 
        type: Number, 
        required: true,
        Min: 1
    },
    sugarAmount: { 
        type: Number, 
        required: true,
        Min: 1
    },
    productionDate: { 
        type: Date, 
        required: true
    },
    expirationDate: { 
        type: Date, 
        required: true
    }
});

module.exports = mongoose.model('Jam', jamSchema);
