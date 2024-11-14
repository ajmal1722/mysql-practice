import express from 'express';
const router = express();
import { 
    getProducts,
    createProduct,
    getSingleProduct,
} from '../controllers/productController.js';

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getSingleProduct);

export default router;