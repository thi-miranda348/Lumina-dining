const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

//middleware
app.use(cors()); // Allow React app to fetch data
app.use(express.json()); // Allow the server to read JSON payloads (needed for checkout)

// import mock data
const menuData = require('./data/menu.json');
const userData = require('./data/user.json');

app.get('/api/menu', (req, rea) => {
    res.json(menuData);
})
app.get('/api/user', (req, res) => {
    res.json(userData);
})

// POST route to simulate checkout
app.post('/api/orders', (req, res) => {
    // req.body contains the JSON payload sent from the React frontend
    const { items, total } = req.body; 

    // Basic validation to ensure the frontend sent data
    if (!items || !total) {
        return res.status(400).json({ error: "Missing cart items or total price" });
    }

    // Simulate calculating loyalty points earned (e.g., 10 point per dollar spent)
    const pointsEarned = Math.floor(total * 10);

    // Simulate generating a random Order ID
    const orderId = `ORD-${Math.floor(Math.random() * 10000)}`;

    // Send a success response back to the frontend
    res.json({
        success: true,
        message: "Order placed successfully!",
        orderId: orderId,
        pointsEarned: pointsEarned,
        status: "Received"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})