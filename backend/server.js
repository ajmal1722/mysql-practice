import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routers/taskRouter.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Task routes
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})