const express = require('express');
const cors = require('cors'); // <-- Enable CORS

const app = express();

// Use the port Render provides or default to 10000
const PORT = process.env.PORT || 10000;

// Must bind to 0.0.0.0 for Render to detect it!
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

// Enable CORS for all origins
app.use(cors()); // <-- This allows frontend requests

// Middleware to parse JSON requests (important for POST)
app.use(express.json());

// Sample Route (you can add your real routes here)
app.get('/', (req, res) => {
  res.send('✅ Server is running on Render!');
});

// Example POST route (matches your frontend /api/chat call)
app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  // Replace this with real logic later
  res.json({ reply: `You said: ${userMessage}` });
});
