// Simple Countdown Timer
function countdown() {
  const timer = document.getElementById('timer');
  let hours = 9, minutes = 4, seconds = 52;

  setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 59;
      hours--;
    }

    timer.textContent = `${hours}h : ${minutes}m : ${seconds}s`;
  }, 1000);
}

countdown();
function buyNow(productName) {
  // Redirect to the payment page with the product name
  const paymentUrl = `/payment-page.html?product=${encodeURIComponent(productName)}`;
  window.location.href = paymentUrl;
}
function viewDetails(productName) {
  // Redirect to the product details page
  const detailsUrl = `/product-details.html?product=${encodeURIComponent(productName)}`;
  window.location.href = detailsUrl;
}
function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productName);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}
// Retrieve cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-container');

// Render cart items
cart.forEach((item) => {
  const listItem = document.createElement('div');
  listItem.textContent = item;
  cartContainer.appendChild(listItem);
});
document.getElementById("search-input").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const productName = product.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
