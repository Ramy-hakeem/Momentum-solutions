import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon, StarIcon } from "@heroicons/react/solid";
import Spinner from "../../Components/Spinner";
import { useProduct } from "../../Context/ProductContext";
import { useCart } from "../../Context/CartContext";
import styles from "./styles.module.css";

const ProductDetail = () => {
  const { addToCart, items } = useCart();
  const { product, loading, setProductID } = useProduct();

  const findCartItem = items.find((item) => item.id === product.id);

  const { product_id } = useParams();

  useEffect(() => {
    setProductID(product_id);
  }, []);

  return (
    <>
      {!loading && product?.id ? (
        <div className="flex flex-wrap max-w-7xl mx-auto my-4 min-h-screen">
          <div className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 flex flex-wrap">
            <img
              alt="ecommerce"
              className={styles.image}
              src={product.image}
            />
            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 my-auto">
              <h2 className={styles.brand}>
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-2xl font-bold tracking-tight mb-1">
                {product.title}
              </h1>
              <p className={styles.productDetailText}>
                {product.description}
              </p>
              <div className="flex">
                <div className="my-auto">
                  <span className="font-extralight text-2xl inline-block align-middle mt-2 my-auto">
                    $ {product.price}
                  </span>
                </div>
                <div className="block ml-auto my-auto mt-0">
                  {" "}
                  <div className={styles.addToCart}>
                    <button
                      className={`${styles.addToCartButton} ${findCartItem ? '!bg-red-600' : 'bg-blue-600'}`}
                      onClick={() => addToCart(product, findCartItem)}
                    >
                      <ShoppingCartIcon
                        className={styles.shoppingCartIcon}
                        aria-hidden="true"
                      />

                      <div className="flex flex-col self-center">
                        <span className={styles.buttonText}>
                          {findCartItem ? "Remove from cart" : "Add to Cart"}
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
