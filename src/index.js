import express from 'express';
import { PageHome } from './page/PageHome.js';
import { PageAbout } from './page/PageAbout.js';
import { PageRegister } from './page/PageRegister.js';
import { Page404 } from './page/Page404.js';

const app = express();
const port = 3030;

app.get('/', (req, res) => res.send(new PageHome().render()));
app.get('/about', (req, res) => res.send(new PageAbout().render()));
app.get('/register', (req, res) => res.send(new PageRegister().render()));
app.get('/*error', (req, res) => res.send(new Page404().render()));

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});