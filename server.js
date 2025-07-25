// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // GET all products
// app.get('/api/products', (req, res) => {
//   const data = fs.readFileSync('./products.json', 'utf-8');
//   res.json(JSON.parse(data));
// });

// // // Optional: Save cart
// // app.post('/api/cart', (req, res) => {
// //   fs.writeFileSync('./cart.json', JSON.stringify(req.body, null, 2));
// //   res.json({ message: 'Cart saved successfully' });
// // });

// // // Optional: Get cart
// // app.get('/api/cart', (req, res) => {
// //   if (!fs.existsSync('./cart.json')) return res.json([]);
// //   const cart = fs.readFileSync('./cart.json', 'utf-8');
// //   res.json(JSON.parse(cart));
// // });

// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const app = express();

// // Use Vercel's dynamic port if available
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // GET all products
// app.get('/api/products', (req, res) => {
//   const data = fs.readFileSync('./products.json', 'utf-8');
//   res.json(JSON.parse(data));
// });

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

// app.listen(PORT, () => {
//   console.log(`Backend running on http://localhost:${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const path = require('path');

app.get('/api/products', (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8');
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Error reading products:", err);
    res.status(500).json({ error: "Failed to load products." });
  }
});


app.get('/api/products', (req, res) => {
  const data = fs.readFileSync('./api/products.json', 'utf-8');
  res.json(JSON.parse(data));
});

app.post('/api/cart', (req, res) => {
  res.json({ message: 'Cart saving not available on Vercel.' });
});

app.get('/api/cart', (req, res) => {
  res.json([]);
});

// ✅ REMOVE listen
module.exports = app;
