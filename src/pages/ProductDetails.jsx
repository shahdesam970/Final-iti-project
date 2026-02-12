import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { findExtraMakeupProductById } from "../constants/makeupProducts";
import { findExtraSkinCareProductById } from "../constants/skinCareProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const fallbackImage = "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp";

  useEffect(() => {
    const localProduct =
      findExtraMakeupProductById(id) || findExtraSkinCareProductById(id);

    if (localProduct) {
      setProduct(localProduct);
      return;
    }

    getProductById(id).then(res =>
      setProduct(res.data)
    );
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container product-details fade-in">
      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        onError={(e) => {
          e.currentTarget.src = fallbackImage;
        }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;
