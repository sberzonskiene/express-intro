import express from 'express';
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  console.log('home');
  res.send('"Home" page content!');
});

app.get('/about', (req, res) => {
  console.log('about');
  res.send('"About" page content!');
});

app.get('/*error', (req, res) => {
  res.send('Page 404')
});


app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});