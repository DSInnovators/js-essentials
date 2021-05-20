const fs = require('fs');
const request = require('request');

fs.readFile('sites.txt', function (err, content) {
  if (err) {
    console.log(err);
    return;
  }

  const uris = content.toString('utf8').trim().split(/\r?\n/);

  console.log(`Number of URIs: ${uris.length}`);

  for (let i = 0; i < uris.length; i++) {
    const uri = uris[i];
    request(uri, function (error, response, body) {
      if (error) {
        console.log(`Error in request for URI ${i}`, error);
        return;
      }

      console.log(`Got response for URI ${i}, statusCode: ${response.statusCode}, length: ${body.length}`);
    })
  }

  // do something

});

console.log("After call to fs.readFile");


