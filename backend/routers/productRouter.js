import express from 'express';
const router = express();
import { 
    createProduct,
} from '../controllers/productController.js';

router.post('/', createProduct);

export default router;