import { useState } from 'react';
import Form from './Form';

const AdminHome = () => {
    const [showForm, setShowForm] = useState(true)
    // const [formData, setFormData] = useState({
    //     image: '',
    //     title: '',
    //     description: '',
    //     price: ''
    // })

    const handleToggle = () => {
        setShowForm(prev => !prev)
    }

    return (
        <>
            {showForm ? (
                <div className="flex justify-center my-16">
                    <button 
                        onClick={handleToggle}
                        className="bg-green-500 hover:bg-green-600 px-5 p-2 rounded-md"
                    >
                        Add product
                    </button>
                </div>
            ) : <Form handleToggle={handleToggle} />}
        </>
    )
}

export default AdminHome
