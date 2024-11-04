import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import taskRoutes from './routers/taskRouter.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(urlencoded({ extended: false }))

app.use(morgan('tiny'))

// Task routes
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})