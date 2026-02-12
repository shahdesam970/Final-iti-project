import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const fallbackImage = "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp";

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container fade-in">
      <h2 className="page-title">Your Cart</h2>

      {items.length === 0 && <p className="empty-state">Your cart is empty.</p>}

      {items.map(item => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.thumbnail || item.images?.[0]}
            alt={item.title}
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
          />
          <div className="cart-item-info">
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
          <div className="quantity">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}

      <h3 className="cart-total">Total: ${total}</h3>

      {items.length > 0 && (
        <Link to="/checkout">
          <button>Proceed To Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
