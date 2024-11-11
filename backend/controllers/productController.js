import pool from "../connection/db.js";

const createProduct = async (req, res) => {
    try {
        console.log('req. is received')
        const { title, description, price, image } = req.body;
        console.log(req.body);

        res.json({msg: 'received'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}

export {
    createProduct,
}