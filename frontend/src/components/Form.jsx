import { useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";

const Form = ({ handleToggle }) => {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: '',
        price: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
    
        try {
            const response = await fetch('http://localhost:8000/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response)
    
            // if (response.ok) {
            //     console.log("Product added successfully");
    
            //     // Clear the form after successful submission
            //     setFormData({
            //         title: '',
            //         image: '',
            //         description: '',
            //         price: ''
            //     });
            // } else {
            //     console.error("Failed to add product", response);
            // }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <div className="w-1/2 mx-auto my-20 border p-5">
            <div className="flex justify-end my-5" onClick={handleToggle}>
                <TiArrowBackOutline className="text-2xl cursor-pointer text-gray-700 hover:text-gray-950 hover:scale-105" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Price</label>
                    <input 
                        type="number" 
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
                    <input 
                        type="text" 
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
