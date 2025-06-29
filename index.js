const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Zap Token Server is running!');
});

app.post('/receive-token', (req, res) => {
  const token = req.headers['authorization']; // Expecting "Bearer <token>"
  
  if (!token) {
    return res.status(400).json({ error: 'Missing Authorization header' });
  }

  console.log('✅ Received token:', token); // For debugging

  // Optional: validate token / make calls using it

  res.json({
    message: 'Access token received successfully',
    token: token // Optional: return back for confirmation
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
