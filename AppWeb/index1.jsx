const express = require('express');
const app = express()
const port = 3002


app.get('/latihan1')


// listen codenya
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});