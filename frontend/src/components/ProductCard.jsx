import { FaCartShopping } from "react-icons/fa6";

const ProductCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs transition-transform transform hover:scale-105">
            <img 
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6YScnZrUJ40nat_-wuwNHMC_jceh0A3Zo_6sQc_ALstWg5DfIlAe5ro3MtgeZp4VlKd04hCMooRuDVQMgmfDD9x0XjYrPJRmid4Ibf6w&usqp=CAE" 
                alt="Product Image" 
                className="w-full h-56 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    PINACOLADA Women Peplum Midi Dress (M)
                </h3>
                <p className="text-gray-600 mb-4">
                    Stylish and comfortable, perfect for any occasion.
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">$49.99</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                        Add to Cart 
                        <FaCartShopping />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;