import express from 'express';
const router = express.Router();
import { 
    getTasks,
} from '../controllers/taskController.js';

router.get('/', getTasks);

export default router;