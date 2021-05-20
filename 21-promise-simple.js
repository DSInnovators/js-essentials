const fetch = require('node-fetch');

console.log('Fetching data');

fetch('https://edition.cnn.com')
  .then(function (res) {
    console.log('status:', res.status);
  })
  .catch(function (error) {
    console.log('Error in fetch', error);
  })

console.log('After call to fetch');
