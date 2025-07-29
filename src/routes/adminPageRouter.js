import express from 'express';
import { PageDashboard } from '../pages/admin/Dashboard.js';
import { PageAdminProducts } from '../pages/admin/products/Products.js';
import { PageAdminProductsNew } from '../pages/admin/products/ProductsNew.js';


export const adminPageRouter = express.Router();

adminPageRouter.get('/admin', (req, res) => res.send(new PageDashboard(req).render()));
adminPageRouter.get('/admin/products', (req, res) => res.send(new PageAdminProducts(req).render()));
adminPageRouter.get('/admin/products/new', (req, res) => res.send(new PageAdminProductsNew(req).render()));