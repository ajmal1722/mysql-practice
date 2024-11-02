import pool from "../connection/db.js";

const getTasks = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tasks');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {
    getTasks,
}