import express from 'express';
import { Page404 } from './pages/public/Page404.js';
import { publicPageRouter } from './routes/publicPageRouter.js';
import { publicApiRouter } from './routes/publicApiRouter.js';
import { adminPageRouter } from './routes/adminPageRouter.js';

const app = express();
const port = 3030;

app.use(express.static('public'));
app.use(express.json());

app.use('/', publicPageRouter);
app.use('/', publicApiRouter);
app.use('/', adminPageRouter);

app.get('*error', (req, res) => res.send(new Page404(req).render()));

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});