import pool from "../connection/db.js";

const getProducts = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM PRODUCTS');
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: error.message });
    }
};

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

const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const [product] = await pool.query('SELECT * FROM PRODUCTS WHERE id = ?', [id]);

        // Check if the product exists
        if (product.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product[0]);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: error.message });
    }
};

export {
    getProducts,
    createProduct,
    getSingleProduct
}