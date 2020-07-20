const express = require('express');
const app = express();

// for the css file and images
app.use(express.static('public'));

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000);
