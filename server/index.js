// const express = require('express');
// const cors = require('cors');

// const app = express();

// const PORT = 3000;

// //middleware
// app.use(cors()); // Allow React app to fetch data
// app.use(express.json()); // Allow the server to read JSON payloads (needed for checkout)

// // import mock data
// const menuData = require('./data/menu.json');
// const userData = require('./data/user.json');

// app.get('/api/menu', (req, rea) => {
//     res.json(menuData);
// })
// app.get('/api/user', (req, res) => {
//     res.json(userData);
// })


// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// })

const express = require('express');
const cors = require('cors'); // Import CORS

const app = express(); // Initialize express as a function

const PORT = 3000;

// Middleware
app.use(cors()); // Allow your React app to fetch data
app.use(express.json()); // Allow the server to read JSON payloads (needed for checkout later)

// Import mock data
const menuData = require('./data/menu.json');
const userData = require('./data/user.json'); // Fixed the typo here

// API Routes
app.get('/api/menu', (req, res) => { // Fixed order: req, res
    res.json(menuData);
});

app.get('/api/user', (req, res) => { // Fixed order: req, res
    res.json(userData); // Variable names match now
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); // Fixed the URL formatting
});