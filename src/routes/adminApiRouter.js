import express from 'express';
import { postProducts } from '../api/admin/postProducts.js';
import { deleteProducts } from '../api/admin/deleteProducts.js';

export const adminApiRouter = express.Router()

adminApiRouter.post('/products/new', postProducts);
adminApiRouter.delete('/products/:url', deleteProducts);