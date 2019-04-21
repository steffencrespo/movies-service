require('dotenv/config');

const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', (req, res) => {
  res.json(['welcome to the movieDB; /movies']);
});

app.get('/movies', (req, res) => {
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
  fetch(popularMoviesUrl)
    .then(res => res.json(res))
    .then(json => res.json(json));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
