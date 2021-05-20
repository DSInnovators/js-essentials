const { readFile } = require('fs/promises');
const fetch = require('node-fetch');

async function process() {
  const content = await readFile('sites.txt');

  const uris = content.toString('utf8').trim().split(/\r?\n/);
  console.log(`Number of URIs: ${uris.length}`);

  const res = await fetch(uris[0]);
  console.log('status:', res.status);
}

process();

console.log("After call to process");

