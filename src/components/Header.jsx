import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

const Header = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="nav container">
        <div className="logo">
          <Link to="/">MyStore</Link>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart ({items.length})</Link>
          <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
            Toggle Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
