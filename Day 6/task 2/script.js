
const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
  ];
  
  function renderProductListing(products) {
    const productListContainer = document.getElementById("product-listing");
    productListContainer.innerHTML = "";
  
    products.forEach(product => {
      const productItem = document.createElement("div");
      productItem.innerHTML = `<p>${product.name} - $${product.price}</p>`; 
      productListContainer.appendChild(productItem);
    });
  
    const noProductsMessage = document.getElementById("no-products-message");
    if (products.length === 0) {
      noProductsMessage.style.display = "block";
    } else {
      noProductsMessage.style.display = "none";
    }
  }
  
  function filterProducts() {
    const selectedCategory = document.getElementById("category-filter").value;
    const selectedTags = Array.from(document.querySelectorAll("#filter-ui input[type='checkbox']:checked")).map(checkbox => checkbox.value);
  
    let filteredProducts = products;
  
    if (selectedCategory !== "") {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
  
    if (selectedTags.length > 0) {
      filteredProducts = filteredProducts.filter(product => product.tags.some(tag => selectedTags.includes(tag)));
    }
  
    renderProductListing(filteredProducts);
  }
  
  renderProductListing(products);
  
  document.getElementById("category-filter").addEventListener("change", filterProducts);
  document.querySelectorAll("#filter-ui input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", filterProducts);
  });