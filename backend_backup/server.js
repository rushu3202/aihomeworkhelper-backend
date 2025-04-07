const express = require('express');
const app = express();

// Use the port Render provides or default to 10000
const PORT = process.env.PORT || 10000;

// Route
app.get('/', (req, res) => {
  res.send('✅ Server is running on Render!');
});

// Must bind to 0.0.0.0 for Render to detect it!
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
