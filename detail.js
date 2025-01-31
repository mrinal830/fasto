// Get product data from URL query parameters
const params = new URLSearchParams(window.location.search);
const productIndex = params.get('index');

// Sample product data (replace this with a backend API call if needed)
const products = [
  {
    title: "Lenovo Laptop",
    price: "₹19,999",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/6/t/3/ideapad-d330-10igl-2-in-1-laptop-lenovo-original-imah4ybkrmcvzwqp.jpeg?q=70",
    description: "This is a great product.",
    reviews: ["Excellent product!", "Very useful.", "Worth the price!"]
  },
  {
    title: "Apple MacBook AIR Apple M2 - (16 GB/256 GB SSD/macOS Sequoia) MC7U4HN/A",
    price: "₹77,999",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/b/n/-original-imagfdf4xnbyyxpa.jpeg?q=70",
    description: "This is another amazing product.",
    reviews: ["Highly recommend.", "Good quality.", "Value for money."]
  },
  // ... (add the remaining product data here as in app.js)
];

// Fetch the product based on the index
const product = products[productIndex];

if (product) {
  // Populate product details
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-price').textContent = product.price;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-reviews').innerHTML = product.reviews.map(review => `<li>${review}</li>`).join('');

  // Handle Buy Now button
  document.getElementById('buy-now-button').addEventListener('click', () => {
    alert(`Redirecting to purchase ${product.title}!`);
  });

  // Handle Add to Cart button
  document.getElementById('add-to-cart-button').addEventListener('click', () => {
    alert(`${product.title} added to cart!`);
  });
} else {
  document.body.innerHTML = '<p>Product not found.</p>';
}
