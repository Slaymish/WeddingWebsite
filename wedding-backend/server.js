const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const RSVP = require('./models/RSVP');

app.use(cors());
app.use(express.json()); 

app.get('/api/details', (req, res) => {
    const details = {
        couple: "Finlay & Lani",
        date: "XXX of XXX 2024",
        venue: "The Whitehouse"
    };
    res.json(details);
});

app.post('/api/rsvp', async (req,res) => {
    try {
        const { name, email, attending, message } = req.body;
        const newRSVP = new RSVP({
            name,email,attending,message
        });
        await newRSVP.save();
        res.json({ message: "RSVP submitted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});