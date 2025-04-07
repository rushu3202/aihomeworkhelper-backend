const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('✅ Server is running on Render!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${port}`);
});
