const express = require('express');

const app = express();

// Handle CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.use("/api/posts",(req, res, next) => {
    const posts = [
        {id: 'e45trey', title: 'The first post', content: 'The first post content (from server)'},
        {id: 'y78u9io', title: 'The second post', content: 'The second post content (from server)'},
    ]
    res.status(200).json({message: 'Successful retrival of posts!', posts:posts});
});

// Utilize this in root/server.js.
module.exports = app;