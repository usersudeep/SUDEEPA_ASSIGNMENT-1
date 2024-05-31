const express = require('express');
const fs = require('fs');

const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
  fs.readFile('./sudeepa_assignment.html', 'utf8', (err, html) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
