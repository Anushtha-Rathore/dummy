// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('🚀 Zap Token Server is running!');
// });

// app.post('/receive-token', (req, res) => {
//   const token = req.headers['authorization']; // Expecting "Bearer <token>"
  
//   if (!token) {
//     return res.status(400).json({ error: 'Missing Authorization header' });
//   }

//   console.log('✅ Received token:', token); // For debugging

//   // Optional: validate token / make calls using it

//   res.json({
//     message: 'Access token received successfully',
//     token: token // Optional: return back for confirmation
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 🆕 Home Route: Show headers + token
app.get('/', (req, res) => {
  const headers = req.headers;
  const token = headers['authorization'];

  res.json({
    message: 'Headers received successfully',
    headers: headers,
    tokenArray: token ? [token] : []
  });
});

// Existing route (optional: keep if needed)
app.post('/receive-token', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(400).send('No token provided!');
  }

  console.log('🔐 Token received:', token);

  res.send(`<h2>Token received:</h2><p>${token}</p>`);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
