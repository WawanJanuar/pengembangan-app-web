const express = require("express");
const db = require("./database");
const allRoutes = require("./app");

const app = express();
const port = 3003;

app.use("/api/lol", allRoutes)

db.connect((err) => {
    if(err) {
        console.error("Failed to connect to the database", err);
    } else {
        console.log("Connected to the database...");
    }
})

app.listen(port, () => {
    console.log(`server berjalan di htpp://localhost:${port}`)
})