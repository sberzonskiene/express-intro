import express from 'express';
import { PageHome } from './page/PageHome.js';
import { PageAbout } from './page/PageAbout.js';
import { PageServices } from './page/PagesServices.js';
import { PageRegister } from './page/PageRegister.js';
import { Page404 } from './page/Page404.js';

const app = express();
const port = 3030;

app.use(express.static('public'));

app.get('/', (req, res) => res.send(new PageHome(req).render()));
app.get('/about', (req, res) => res.send(new PageAbout(req).render()));
app.get('/services', (req, res) => res.send(new PageServices(req).render()));
app.get('/register', (req, res) => res.send(new PageRegister(req).render()));
app.get('*error', (req, res) => res.send(new Page404(req).render()));

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});