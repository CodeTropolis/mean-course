const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Implement bodyParser before all other requests and for all incoming requests.
app.use(bodyParser.json());

// Handle CORS. No path - for all routes.
// Could instead use a CORS package.
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = req.body; // .body is a field added by bodyParser.
    console.log(post);
    //TODO: Add post to DB.
    res.status(201).json({message: 'Post added successfully'}); // 201: Ok. A new resource was created.
});

app.use("/api/posts",(req, res, next) => {
    const posts = [
        {id: 'e45trey', title: 'The first post', content: 'The first post content (from server)'},
        {id: 'y78u9io', title: 'The second post', content: 'The second post content (from server)'},
    ]
    res.status(200).json({message: 'Successful retrival of posts!', posts:posts});
});

// Utilize this in root/server.js.
module.exports = app;