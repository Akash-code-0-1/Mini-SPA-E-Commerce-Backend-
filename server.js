const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET all products
app.get('/api/products', (req, res) => {
  const data = fs.readFileSync('./products.json', 'utf-8');
  res.json(JSON.parse(data));
});

// // Optional: Save cart
// app.post('/api/cart', (req, res) => {
//   fs.writeFileSync('./cart.json', JSON.stringify(req.body, null, 2));
//   res.json({ message: 'Cart saved successfully' });
// });

// // Optional: Get cart
// app.get('/api/cart', (req, res) => {
//   if (!fs.existsSync('./cart.json')) return res.json([]);
//   const cart = fs.readFileSync('./cart.json', 'utf-8');
//   res.json(JSON.parse(cart));
// });

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
