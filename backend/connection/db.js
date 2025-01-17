import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config()

console.log(process.env.DB_HOST)

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

pool.query('SELECT 1')
    .then(() => console.log('DB is connected'))
    .catch(err => console.log('DB connection failed', err))

export default pool;