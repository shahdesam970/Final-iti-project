import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fallbackImage = "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp";

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigate("/cart");
  };

  return (
    <div className="product-card">
      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        onError={(e) => {
          e.currentTarget.src = fallbackImage;
        }}
      />

      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <div className="buttons">
        <button onClick={() => navigate(`/products/${product.id}`)}>
          More Details
        </button>

        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
