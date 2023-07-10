const http = require('http');
const port = 9090;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`The sum of 20 and 30 is ${2 + 3}`);
});
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
