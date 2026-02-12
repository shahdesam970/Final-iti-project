import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/api";
import ProductCard from "../components/ProductCard";
import { extraMakeupProducts } from "../constants/makeupProducts";
import {
  extraSkinCareProducts,
  excludedSkinCareTitles,
} from "../constants/skinCareProducts";

const Home = () => {
  const [makeupProducts, setMakeupProducts] = useState([]);
  const [skinCareProducts, setSkinCareProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const [beautyRes, skinCareRes] = await Promise.all([
        getProductsByCategory("beauty", 6, 0),
        getProductsByCategory("skin-care", 6, 0),
      ]);

      setMakeupProducts([
        ...beautyRes.data.products,
        ...extraMakeupProducts,
      ]);

      const filteredSkinCareApiProducts = skinCareRes.data.products.filter(
        (product) => !excludedSkinCareTitles.includes(product.title)
      );

      setSkinCareProducts([
        ...filteredSkinCareApiProducts,
        ...extraSkinCareProducts,
      ]);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container fade-in">
      <h2 className="page-title">Featured Makeup Products</h2>
      <div className="products-grid">
        {makeupProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h2 className="page-title section-title">Featured Skin Care Products</h2>
      <div className="products-grid">
        {skinCareProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
