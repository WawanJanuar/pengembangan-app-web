const express = require('express');
const db = require('./src/Database');
const app = express();
const allRoutes = require('./app')
const port = 3004;

db.connect((err) => {
    if(err){
        console.log('failed connect', err);
    } else {
        console.log('Connected to database');
    }
});

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", allRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});