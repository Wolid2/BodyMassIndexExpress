const express = require('express');
const path = require('path');
const app = express();

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware to handle POST data
app.use(express.urlencoded({ extended: true }));

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Home route to display the form
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle the BMI calculation
app.post('/calculate', (req, res) => {
    const { height, weight } = req.body;
    const bmi = (weight / (height * height)).toFixed(2); // BMI formula
    res.render('result', { bmi });
});

// Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`);
});