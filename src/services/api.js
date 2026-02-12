import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = (limit = 12, skip = 0) =>
  API.get(`/products?limit=${limit}&skip=${skip}`);

export const getProductsByCategory = (category, limit = 30, skip = 0) =>
  API.get(`/products/category/${category}?limit=${limit}&skip=${skip}`);

export const getProductById = (id) =>
  API.get(`/products/${id}`);

export const searchProducts = (query) =>
  API.get(`/products/search?q=${query}`);

export const getCategories = () =>
  API.get("/products/categories");
