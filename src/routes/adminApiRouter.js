import express from 'express';
import { postProducts } from '../api/admin/postProducts.js';
import { deleteProducts } from '../api/admin/deleteProducts.js';
import { putProducts } from '../api/admin/putProducts.js';

export const adminApiRouter = express.Router()

adminApiRouter.post('/products/new', postProducts);
adminApiRouter.put('/products/:original_url', putProducts);
adminApiRouter.delete('/products/:url', deleteProducts);