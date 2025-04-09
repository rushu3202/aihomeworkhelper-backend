const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// POST route for /api/chat
app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  res.json({ reply: `You said: ${userMessage}` });
});

// Default test route
app.get('/', (req, res) => {
  res.send('✅ Server is running on Render!');
});

// Start server on Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
