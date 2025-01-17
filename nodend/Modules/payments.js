const fs = require('fs');
const { parseCSV } = require('./users');

/**
 * load payments from CSV
 * @param {string} filePath - Path to CSV file
 * @return {Array<Object>} Load data into JSON arr
 */
function loadPayments(filePath) {
    return parseCSV(fs.readFileSync(filePath, 'utf-8'));
}

module.exports = { loadPayments };
