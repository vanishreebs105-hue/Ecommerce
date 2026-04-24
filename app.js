// Product Data
const products = [
  { id: 1, name: "Smartphone", price: 15000, category: "electronics" },
  { id: 2, name: "Laptop", price: 50000, category: "electronics" },
  { id: 3, name: "T-Shirt", price: 500, category: "clothing" },
  { id: 4, name: "Jeans", price: 1200, category: "clothing" },
  { id: 5, name: "Watch", price: 2000, category: "accessories" },
  { id: 6, name: "Sunglasses", price: 800, category: "accessories" }
];

// Load Category Products
if (window.location.pathname.includes("products.html")) {
  const category = localStorage.getItem("category");

  document.getElementById("categoryTitle").innerText = category;

  let filteredProducts = products.filter(p => p.category === category);

  displayProducts(filteredProducts);

  window.applyFilter = function () {
    const min = document.getElementById("minPrice").value || 0;
    const max = document.getElementById("maxPrice").value || Infinity;

    const result = filteredProducts.filter(p => p.price >= min && p.price <= max);
    displayProducts(result);
  };

  function displayProducts(items) {
    const grid = document.getElementById("productGrid");

    grid.innerHTML = items.map(p => `
      <div class="card" onclick="viewProduct(${p.id})">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `).join("");
  }

  window.viewProduct = function(id) {
    localStorage.setItem("productId", id);
    window.location.href = "product.html";
  };
}

// Product Details Page
if (window.location.pathname.includes("product.html")) {
  const id = parseInt(localStorage.getItem("productId"));

  const product = products.find(p => p.id === id);

  document.getElementById("productDetails").innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: ₹${product.price}</p>
    <button onclick="addToCart()">Add to Cart</button>
  `;

  window.addToCart = function() {
    alert("Added to cart!");
  };
}