import pool from "../connection/db.js";

const createProduct = async (req, res) => {
    try {
        const { title, description, price, image } = req.body;

        // Ensure all required fields are provided
        if (!title || !description || !price || !image) {
            return res.status(400).json({ error: "All fields are required: title, description, price, image" });
        }

        const [result] = await pool.query(
            'INSERT INTO PRODUCTS (title, description, price, image) VALUES (?, ?, ?, ?)',
            [title, description, price, image]
        );

        res.json({ id: result.insertId, title, description, price, image });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: error.message });
    }
};

export {
    createProduct,
}