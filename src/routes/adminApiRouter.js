import express from 'express';
import { postProducts } from '../api/admin/postProducts';

export const adminApiRouter = express.Router()

adminApiRouter.post('/products', postProducts);