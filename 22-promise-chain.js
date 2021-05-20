const { readFile } = require('fs/promises');
const fetch = require('node-fetch');

readFile('sites.txt')
  .then(function (content) {
    const uris = content.toString('utf8').trim().split(/\r?\n/);
    console.log(`Number of URIs: ${uris.length}`);

    return fetch(uris[0]);
  })
  .then(function (res) {
    console.log('status:', res.status);
  });

console.log("After call to readFile");

// 1 - text
// 2 - multiple promise resolution


