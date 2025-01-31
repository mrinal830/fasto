const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5500', // Update to your frontend's origin
    credentials: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
}));

// Simulated product database
const products = [
    { id: 1, name: 'Analog Watch', price: 19.99 },
    // Add more products as needed
];

// API to fetch products
app.get('/products', (req, res) => {
    res.json(products);
});

// API to add to cart
app.post('/cart', (req, res) => {
    const { productId } = req.body;

    if (!req.session.cart) {
        req.session.cart = [];
    }

    const product = products.find(p => p.id === productId);
    if (product) {
        req.session.cart.push(product);
        res.status(200).json({ message: 'Product added to cart', cart: req.session.cart });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// API to get cart
app.get('/cart', (req, res) => {
    res.json(req.session.cart || []);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
