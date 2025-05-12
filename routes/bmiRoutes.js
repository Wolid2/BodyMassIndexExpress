const express = require('express');
const router = express.Router();

// GET route for the home page
router.get('/calculate-bmi', (req, res) => {
    res.render('index'); // Render the index.hbs file
});

// POST route for calculating BMI
router.post('/calculate-bmi', (req, res) => {
    const { height, weight } = req.body; // Extract height and weight from the form submission
    const bmi = weight / (height * height); // BMI formula: weight (kg) / height (m)²

    res.render('result', { bmi, height, weight });
});

module.exports = router;