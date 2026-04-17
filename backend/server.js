const express = require('express');
const app = express();

// Middleware (important for JSON APIs)
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Optional: test API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

// Server port
const PORT = 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});