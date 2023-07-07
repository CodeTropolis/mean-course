const express = require('express');

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    res.send('Hello from Express!')
});
// Utilize this in root/server.js.
module.exports = app;