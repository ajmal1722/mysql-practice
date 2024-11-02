import express from 'express';
const router = express.Router();
import { 
    getTasks,
    createTask
} from '../controllers/taskController.js';

router.get('/', getTasks);
router.post('/', createTask);

export default router;