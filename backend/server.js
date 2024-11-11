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

// CORS options to allow requests from specific origin
const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Include cookies in requests
};

// Cors middleware
app.use(cors(corsOptions))

// Task routes
app.use('/api/tasks', taskRoutes);

// Product routes
app.use('/api/product', productRoutes)

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})