import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  rating: number;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, rating, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-5 w-5 text-yellow-400 mr-1" />
          <span className="text-gray-600 dark:text-gray-300">{rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-bold">${price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;