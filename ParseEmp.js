const fs = require('fs');

fs.readFile('Employee.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});