
const fs = require('fs');
const path = require('path');

async function generateData(fileName = './data/sens_data.json') {
  const targetSizeMB = 10;
  const recordTemplate = () => ({
    sensorId: `sensor-${Math.floor(Math.random() * 10000)}`,
    timestamp: new Date().toISOString(),
    temperature: (Math.random() * 50).toFixed(2),
    humidity: (Math.random() * 100).toFixed(2),
  });

  const dirPath = path.dirname(fileName);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const writeStream = fs.createWriteStream(fileName);
  let size = 0;

  while (size < targetSizeMB * 1024 * 1024) {
    const record = JSON.stringify(recordTemplate());
    writeStream.write(record + '\n');
    size += Buffer.byteLength(record + '\n');
  }

  writeStream.end();
  console.log(`Created ${fileName} with  ${targetSizeMB} MB `);
}

module.exports = generateData;