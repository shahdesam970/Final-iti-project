getProducts().then(res => {
  const filtered = res.data.products.filter(p =>
    p.category.includes(searchTerm)
  );
});
