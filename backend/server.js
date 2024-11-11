import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import taskRoutes from './routers/taskRouter.js';
import productRoutes from './routers/productRouter.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(urlencoded({ extended: false }));

// Morgan middleware
app.use(morgan('tiny'));

// Cors middleware
app.use(cors({ origin: 'http://localhost:5173/' }))

// Task routes
app.use('/api/tasks', taskRoutes);

// Product routes
app.use('/api/product', productRoutes)

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})