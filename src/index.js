import express from 'express';
import { home } from './page/home.js';
import { about } from './page/about.js';
import { page404 } from './page/page404.js';
import { PageHome } from './page/PageHome.js';
import { PageAbout } from './page/PageAbout.js';

const app = express();
const port = 3030;

app.get('/', (req, res) => res.send(new PageHome().render()));
app.get('/about', (req, res) => res.send(new PageAbout().render()));
app.get('/*error', (req, res) => res.send(page404()));

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});