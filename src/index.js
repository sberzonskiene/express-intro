import express from 'express';
import { Page404 } from './pages/public/Page404.js';
import { publicPageRouter } from './routes/publicPageRouter.js';
import { publicApiRouter } from './routes/publicApiRouter.js';
import { adminPageRouter } from './routes/adminPageRouter.js';
import { cookieParser } from './middleware/cookieParser.js';
import { userData } from './middleware/userData.js';
import { adminApiRouter } from './routes/adminApiRouter.js';


const app = express();
const port = 3030;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser);
app.use(userData);


app.use('/', publicPageRouter);
app.use('/api', publicApiRouter);
app.use('/admin', adminPageRouter);
app.use('/api/admin', adminApiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).send('Server error');
})

app.get('*error', (req, res) => res.send(new Page404(req).render()));

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});