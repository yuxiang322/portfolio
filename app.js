const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'portfolio' directory
app.use(express.static(path.join(__dirname, 'portfolio')));

// Serve the index.html file on root request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
