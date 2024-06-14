import { ShoppingCartIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Card = ({ item, addToCart, findCartItem }) => {
  const priceInteger = Math.trunc(item.price);
  const priceFraction = parseInt((item.price % 1).toFixed(2).substring(2));

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" title={item.title}>
      <div className="block shadow-sm hover:shadow-md border-2 border-gray-200 rounded-md overflow-hidden h-full">
        <Link to={`/product/${item.id}`}>
          <div className="relative pb-64 overflow-hidden shadow-sm">
            <img className="absolute inset-0 max-h-56 w-full object-contain my-4 px-4 transition-transform transform duration-300 ease-in-out hover:scale-105" src={item.image} alt={item.title} />
          </div>
        </Link>

        <div className="p-4 flex flex-col text-sm text-gray-700">
          <p className="font-light truncate mb-2">{item.title}</p>

          <div className="flex justify-center items-baseline">
            <span className="text-xs font-extralight align-sub">$</span>
            <span className="text-lg font-normal mx-0.5 align-text-top">{priceInteger}</span>
            {priceFraction !== 0 && (
              <span className="text-xs font-extralight align-sub">{priceFraction}</span>
            )}
          </div>

          <div className="mt-2 text-center">
            <button
              className={`inline-flex items-center justify-center w-full rounded-md shadow-sm text-sm text-white px-2 py-2 hover:bg-yellow-300 ${findCartItem ? 'bg-red-600' : 'bg-blue-600'}`}
              onClick={() => addToCart(item, findCartItem)}
            >
              <ShoppingCartIcon className="h-5 w-6" aria-hidden="true" />
              <span className="font-bold ml-2">{findCartItem ? "Remove from cart" : "Add to Cart"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
