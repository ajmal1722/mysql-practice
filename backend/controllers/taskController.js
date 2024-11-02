import pool from "../connection/db.js";

const getTasks = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tasks');
        res.json(rows || []);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const [result] = await pool.query('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status]);
        res.json({ id: result.insertId, title, description, status });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}

export {
    getTasks,
    createTask
}