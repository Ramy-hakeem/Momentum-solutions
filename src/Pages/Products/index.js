import React, { useEffect } from "react";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";
import Spinner from "../../Components/Spinner";
import { useParams } from "react-router-dom";
import { useCart } from '../../Context/CartContext'
import Card from "../../Components/Card";

const Products = () => {
  const { addToCart, items } = useCart()

  const { productList, loading, setProductID, setCategory } = useProduct();

  const { category_id } = useParams()

  useEffect(() => {
    setCategory(category_id?.replace(/-/g, " "))
  }, [category_id])

  return (
    <div className={`${styles.cardGroup} min-h-screen`}>
      {!loading ? (
        productList?.map((item) => {
          const findCartItem = items.find((cart_item) => cart_item.id === item.id)
          return (
            <Card key={`product-${item.title}`} item={item} setProductID={setProductID} findCartItem={findCartItem} addToCart={addToCart} />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Products;
