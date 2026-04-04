const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Isse index.html load hogi

// 1. API: Registration handle karne ke liye
app.post('/api/register', (req, res) => {
    const { fullName, eventName } = req.body;
    
    const newEntry = { 
        id: Date.now(), 
        fullName, 
        eventName, 
        college: "Karnavati University (UIT)",
        date: new Date().toLocaleString() 
    };

    // Data ko local JSON file mein save karna (Local Database)
    let db = [];
    if (fs.existsSync('registrations.json')) {
        db = JSON.parse(fs.readFileSync('registrations.json'));
    }
    db.push(newEntry);
    fs.writeFileSync('registrations.json', JSON.stringify(db, null, 2));

    res.status(200).send({ message: "Registration Successful! Saved to Local DB." });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});