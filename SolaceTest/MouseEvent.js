const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  // Read the HTML form from a file
  const form = fs.readFileSync('form.html', 'utf8');
  res.send(form);
});

app.post('/submit', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.send('Error: Please provide a username and password.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
