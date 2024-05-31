const http = require('http');
const fs = require('fs');
const express = require('express'); // Assuming you intend to use Express for routing

const PORT = 8080;

const app = express(); // Create an Express app

// Read the HTML file asynchronously using fs.readFile
fs.readFile('./sudeepa_assignment.html', 'utf8', (err, html) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return; // Handle the error gracefully (e.g., send a 500 Internal Server Error)
  }

  // Create the HTTP server using http.createServer (no need for fs.createServer)
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
  });

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
