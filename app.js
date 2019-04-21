const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json(['welcome to the movieDB; /movies']);
});

app.get('/movies', (req, res) => {
  res.json(['one', 'two', 'three']);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
