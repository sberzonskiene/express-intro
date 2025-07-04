import express from 'express';
import { Page404 } from './page/Page404.js';
import { publicRouter } from './routes/publicRouter.js';

const app = express();
const port = 3030;

app.use(express.static('public'));

app.use('/', publicRouter);

app.get('*error', (req, res) => res.send(new Page404(req).render()));

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});