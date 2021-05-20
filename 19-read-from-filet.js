const fs = require('fs');

fs.readFile('sites.txt', function (err, content) {
  if (err) {
    console.log(err);
    return;
  }

  const contentInString = content.toString('utf8');
  console.log(contentInString);
});

console.log("After call to fs.readFile");


