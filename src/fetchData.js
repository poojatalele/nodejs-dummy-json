const axios = require('axios');
const fs = require('fs');
const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

axios.get(url)
  .then(response => {
    fs.writeFileSync('src/data.json', JSON.stringify(response.data, null, 2));
    console.log('Data fetched and saved to data.json');
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
