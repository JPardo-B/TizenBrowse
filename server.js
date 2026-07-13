const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8085;
const HTML_FILE = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache'
  });
  fs.createReadStream(HTML_FILE).pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`TizenBrowse server running at http://0.0.0.0:${PORT}`);
  console.log(`TV should access: http://<YOUR_PC_IP>:${PORT}`);
});
