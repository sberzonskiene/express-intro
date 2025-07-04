import express from 'express';
import { PageHome } from '../page/PageHome.js';
import { PageAbout } from '../page/PageAbout.js';
import { PageServices } from '../page/PagesServices.js';
import { PageRegister } from '../page/PageRegister.js';
import { PageLogin } from '../page/PageLogin.js';

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => res.send(new PageHome(req).render()));
publicRouter.get('/about', (req, res) => res.send(new PageAbout(req).render()));
publicRouter.get('/services', (req, res) => res.send(new PageServices(req).render()));
publicRouter.get('/register', (req, res) => res.send(new PageRegister(req).render()));
publicRouter.get('/login', (req, res) => res.send(new PageLogin(req).render()));
