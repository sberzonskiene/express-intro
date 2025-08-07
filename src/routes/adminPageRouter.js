import express from 'express';
import { PageDashboard } from '../pages/admin/Dashboard.js';
import { PageAdminProducts } from '../pages/admin/products/Products.js';
import { PageAdminProductsNew } from '../pages/admin/products/ProductsNew.js';


export const adminPageRouter = express.Router();

adminPageRouter.get('/', async (req, res) => res.send(await new PageDashboard(req).render()));

adminPageRouter.get('/products', async (req, res) => res.send(await new PageAdminProducts(req).render()));
adminPageRouter.get('/products/new', async (req, res) => res.send(await new PageAdminProductsNew(req).render()));