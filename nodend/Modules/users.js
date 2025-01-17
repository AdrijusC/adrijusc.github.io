
const fs = require('fs');

/**
 * Parse CSV string into JSON
 * @param {string} data - The CSV string
 * @return {Array<Object>} Parsed JSON
 */
function parseCSV(data) {
    const [headers, ...rows] = data.split('\n').filter(row => row.trim());
    const keys = headers.split(',');
    return rows.map(row => {
        const values = row.split(',');
        return keys.reduce((acc, key, index) => {
            acc[key.trim()] = values[index]?.trim() || null;
            return acc;
        }, {});
    }).filter(entry => entry.id);
}

/**
 * Load data from CSV
 * @param {string} filePath - path to CSV
 * @return {Array<Object>} load user data in JSON
 */
function loadUsers(filePath) {
    return parseCSV(fs.readFileSync(filePath, 'utf-8'));
}

module.exports = { loadUsers, parseCSV };