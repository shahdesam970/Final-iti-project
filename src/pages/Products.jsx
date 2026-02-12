import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/api";
import ProductCard from "../components/ProductCard";
import { extraMakeupProducts } from "../constants/makeupProducts";
import {
  extraSkinCareProducts,
  excludedSkinCareTitles,
} from "../constants/skinCareProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allMakeupProducts, setAllMakeupProducts] = useState([]);
  const [allSkinCareProducts, setAllSkinCareProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("makeup");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const [beautyRes, skinCareRes] = await Promise.all([
      getProductsByCategory("beauty"),
      getProductsByCategory("skin-care"),
    ]);

    const fullMakeupProducts = [...beautyRes.data.products, ...extraMakeupProducts];
    const filteredSkinCareApiProducts = skinCareRes.data.products.filter(
      (product) => !excludedSkinCareTitles.includes(product.title)
    );
    const fullSkinCareProducts = [
      ...filteredSkinCareApiProducts,
      ...extraSkinCareProducts,
    ];

    setAllMakeupProducts(fullMakeupProducts);
    setAllSkinCareProducts(fullSkinCareProducts);
    setProducts(fullMakeupProducts);
  };

  const handleSearch = () => {
    const sourceProducts =
      activeCategory === "makeup" ? allMakeupProducts : allSkinCareProducts;

    if (!query) {
      setProducts(sourceProducts);
      return;
    }

    const normalizedQuery = query.trim().toLowerCase();
    const filtered = sourceProducts.filter((product) =>
      product.title.toLowerCase().includes(normalizedQuery)
    );

    setProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setQuery("");
    setProducts(category === "makeup" ? allMakeupProducts : allSkinCareProducts);
  };

  return (
    <div className="container fade-in">
      <h2 className="page-title">Products</h2>

      <div className="category-switch">
        <button
          className={activeCategory === "makeup" ? "active" : ""}
          onClick={() => handleCategoryChange("makeup")}
        >
          Makeup
        </button>
        <button
          className={activeCategory === "skin-care" ? "active" : ""}
          onClick={() => handleCategoryChange("skin-care")}
        >
          Skin Care
        </button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder={activeCategory === "makeup" ? "Search makeup..." : "Search skin care..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
