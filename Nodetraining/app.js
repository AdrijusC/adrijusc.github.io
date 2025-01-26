
const fs = require('fs');
const readline = require('readline');
const generateData = require('./modules/datgen');

const [,, mode, inputFileName = 'sens_data.json', tempMin = 20, tempMax = 25, humMin = 55, humMax = 65] = process.argv;

async function processFile() {
  const data_size = 10000;
  const results = [];
  const errors = [];
  let batch = [];

  const rl = readline.createInterface({ 
    input: fs.createReadStream(`./data/${inputFileName}`, { encoding: 'utf8' })
  });

  for await (const line of rl) {
    try {
      const record = JSON.parse(line);
      if (
        record.temperature >= tempMin && record.temperature <= tempMax &&
        record.humidity >= humMin && record.humidity <= humMax
      ) {
        batch.push({
          sensorId: record.sensorId,
          localTime: new Date(record.timestamp).toLocaleString(),
          temperature: record.temperature,
          humidity: record.humidity,
        });
      }

      if (batch.length >= data_size) {
        results.push(...batch);
        batch = [];
      }
    } catch {
      errors.push(line);
    }
  }

  if (batch.length > 0) results.push(...batch);

  await fs.promises.writeFile('./data/filtered_results.json', JSON.stringify(results, null, 2));
  await fs.promises.writeFile('./data/error_logs.json', JSON.stringify(errors, null, 2));

  console.log('Saved to ./data/filtered_results.json / errors to ./data/error_logs.json.');
}

(async () => {
  if (mode === '--generate') {
    await generateData('./data/sens_data.json');
  } else if (mode === '--process') {
    await processFile();
  } else {
    console.log('node app.js --generate / node app.js --process');
  }
})();