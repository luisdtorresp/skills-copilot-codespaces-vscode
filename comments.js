// Create web server for static files
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 8080;
const fs = require('fs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Get all comments
router.get('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.parse(data));
        }
    });
});

// Post a comment
router.post('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let comments = JSON.parse(data);
            let newComment = {
                id: comments.length + 1,