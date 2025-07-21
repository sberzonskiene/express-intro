import express from 'express';
import { PageHome } from '../pages/public/PageHome.js';
import { PageAbout } from '../pages/public/PageAbout.js';
import { PageServices } from '../pages/public/PagesServices.js';
import { PageRegister } from '../pages/public/PageRegister.js';
import { PageLogin } from '../pages/public/PageLogin.js';

export const publicPageRouter = express.Router();

publicPageRouter.get('/', (req, res) => res.send(new PageHome(req).render()));
publicPageRouter.get('/about', (req, res) => res.send(new PageAbout(req).render()));
publicPageRouter.get('/services', (req, res) => res.send(new PageServices(req).render()));
publicPageRouter.get('/register', (req, res) => res.send(new PageRegister(req).render()));
publicPageRouter.get('/login', (req, res) => res.send(new PageLogin(req).render()));
