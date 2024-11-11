import productInstance from "../axiox_instance/productInstance";

const createPost = async (data) => {
    try {
        const response = await productInstance.post('/', data)
        console.log('post created:', response);
    } catch (error) {
        console.log('error creating post:', error)
    }
}