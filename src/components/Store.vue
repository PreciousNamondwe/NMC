<template>
  <div class="store-container">
    <!-- Floating Cart Button -->
    <div 
      class="floating-cart-btn"
      @click="toggleCart"
      :class="{ 'cart-has-items': cart.length > 0 }"
    >
      <i class="fas fa-shopping-cart"></i>
      <span v-if="cart.length > 0" class="cart-badge">{{ cartTotalItems }}</span>
    </div>

    <!-- Cart Sidebar -->
    <transition name="slide-fade">
      <div v-if="showCart" class="cart-sidebar">
        <div class="cart-header">
          <h3>Your Shopping Cart ({{ cartTotalItems }})</h3>
          <button @click="toggleCart" class="close-cart">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div v-if="cart.length === 0" class="empty-cart">
          <i class="fas fa-shopping-cart"></i>
          <p>Your cart is empty</p>
        </div>
        
        <div v-else>
          <div class="cart-items">
            <div v-for="item in cart" :key="item.id" class="cart-item">
              <img :src="item.image" :alt="item.name" class="cart-item-image" @error="handleImageError">
              <div class="cart-item-details">
                <h4>{{ item.name }}</h4>
                <p>K{{ item.price.toFixed(2) }}</p>
                <div class="quantity-controls">
                  <button @click.stop="decreaseQuantity(item)" class="qty-btn">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click.stop="increaseQuantity(item)" class="qty-btn">+</button>
                </div>
              </div>
              <button @click.stop="removeFromCart(item.id)" class="remove-item">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
          
          <div class="cart-summary">
            <div class="cart-total">
              <span>Total:</span>
              <span>K{{ cartTotal.toFixed(2) }}</span>
            </div>
            <button class="checkout-btn" @click="proceedToCheckout">
              Proceed to Checkout
            </button>
            <button class="clear-cart" @click="clearCart">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Overlay when cart is open -->
    <transition name="fade">
      <div 
        v-if="showCart" 
        class="cart-overlay" 
        @click="toggleCart"
      ></div>
    </transition>

    <!-- Store Header -->
    <header class="store-header">
      <h1 class="store-title">Clinic Medical Marketplace</h1>
      <p class="store-subtitle">Quality healthcare products for professionals</p>
    </header>
    
    <!-- Search and Filter -->
    <div class="search-filter-container">
      <div class="search-filter">
        <div class="search-input-container">
          <svg class="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input 
            v-model="searchQuery" 
            placeholder="Search medications, supplies..." 
            class="search-input"
          >
        </div>
        <select v-model="categoryFilter" class="category-select">
          <option value="">All Categories</option>
          <option value="drugs">Pharmaceuticals</option>
          <option value="supplies">Medical Supplies</option>
          <option value="equipment">Equipment</option>
          <option value="vaccines">Vaccines</option>
        </select>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-if="filteredProducts.length === 0" class="no-results">
      <svg class="no-results-icon" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
      <p>No products match your search criteria</p>
    </div>

    <!-- Product Grid -->
    <div class="product-grid">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id" 
        class="product-card"
      >
        <div class="product-image-container">
          <img 
            :src="product.image" 
            :alt="product.name" 
            class="product-image"
            @error="handleImageError"
          >
          <div v-if="product.stock <= 10 && product.stock > 0" class="low-stock-badge">
            Low stock: {{ product.stock }}
          </div>
          <div v-if="product.stock === 0" class="out-of-stock-badge">
            Out of stock
          </div>
        </div>
        <div class="product-details">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="price-category">
            <p class="price">K{{ product.price.toFixed(2) }}</p>
            <p class="category">{{ formatCategory(product.category) }}</p>
          </div>
          <button 
            @click="addToCart(product)" 
            class="add-to-cart"
            :disabled="product.stock === 0"
            :class="{ 'disabled-btn': product.stock === 0 }"
          >
            {{ product.stock > 0 ? 'Add to Cart' : 'Out of Stock' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Using reliable image URLs that won't break
const placeholderImage = 'https://via.placeholder.com/300x300?text=Product+Image'

const products = ref([
  {
    id: 1,
    name: 'Paracetamol 500mg',
    price: 5000.99,
    category: 'drugs',
    description: 'Pain reliever and fever reducer, 100 tablets per bottle',
    image: 'https://m.media-amazon.com/images/I/41-Jo8Xv1WL._SY445_SX342_QL70_FMwebp_.jpg',
    stock: 42
  },
  {
    id: 2,
    name: 'Surgical Masks (50pk)',
    price: 12000.50,
    category: 'supplies',
    description: '3-ply disposable surgical masks, latex-free',
    image: 'https://m.media-amazon.com/images/I/61DvdCJraWL._SX679_.jpg',
    stock: 5
  },
  {
    id: 3,
    name: 'Blood Pressure Monitor',
    price: 89000.99,
    category: 'equipment',
    description: 'Digital upper arm monitor with Bluetooth',
    image: 'https://m.media-amazon.com/images/I/71eSP8Sf-eL._SL1500_.jpg',
    stock: 15
  },
  {
    id: 4,
    name: 'Ibuprofen 200mg',
    price: 7000.25,
    category: 'drugs',
    description: 'NSAID pain reliever, 60 tablets per bottle',
    image: 'https://m.media-amazon.com/images/I/81gexqzxHLL._SX466_.jpg',
    stock: 0
  },
  {
    id: 5,
    name: 'Sterile Gloves (100pk)',
    price: 24899.99,
    category: 'supplies',
    description: 'Latex-free nitrile gloves, size medium',
    image: 'https://m.media-amazon.com/images/I/61EC5QmMbWL._AC_UL320_.jpg',
    stock: 32
  },
  {
    id: 6,
    name: 'Flu Vaccine 2023',
    price: 3500.00,
    category: 'vaccines',
    description: 'Seasonal quadrivalent influenza vaccine',
    image: 'https://m.media-amazon.com/images/I/31qC92CFXJL._SY445_SX342_QL70_FMwebp_.jpg',
    stock: 18
  }
])

const searchQuery = ref('')
const categoryFilter = ref('')
const cart = ref([])
const showCart = ref(false)

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = categoryFilter.value ? product.category === categoryFilter.value : true
    return matchesSearch && matchesCategory
  })
})

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const cartTotalItems = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0)
})

function formatCategory(category) {
  return {
    drugs: 'Pharmaceuticals',
    supplies: 'Medical Supplies',
    equipment: 'Equipment',
    vaccines: 'Vaccines'
  }[category] || category
}

function addToCart(product) {
  if (product.stock <= 0) return
  
  const existingItem = cart.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.value.push({
      ...product,
      quantity: 1
    })
  }
  
  product.stock--
}

function removeFromCart(productId) {
  const itemIndex = cart.value.findIndex(item => item.id === productId)
  if (itemIndex !== -1) {
    const product = products.value.find(p => p.id === productId)
    if (product) {
      product.stock += cart.value[itemIndex].quantity
    }
    cart.value.splice(itemIndex, 1)
  }
}

function increaseQuantity(item) {
  const product = products.value.find(p => p.id === item.id)
  if (product && product.stock > 0) {
    item.quantity++
    product.stock--
  }
}

function decreaseQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--
    const product = products.value.find(p => p.id === item.id)
    if (product) {
      product.stock++
    }
  } else {
    removeFromCart(item.id)
  }
}

function clearCart() {
  cart.value.forEach(item => {
    const product = products.value.find(p => p.id === item.id)
    if (product) {
      product.stock += item.quantity
    }
  })
  cart.value = []
}

function handleImageError(event) {
  event.target.src = placeholderImage
}

function toggleCart() {
  showCart.value = !showCart.value
}

function proceedToCheckout() {
  alert(`Proceeding to checkout with total: K${cartTotal.value.toFixed(2)}`)
  // In a real app, you would navigate to a checkout page
  showCart.value = false
}
</script>

<style scoped>
/* Base styles */
.store-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #2c3e50;
  position: relative;
}

.store-header {
  text-align: center;
  margin-bottom: 30px;
}

.store-title {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.store-subtitle {
  font-size: 1rem;
  color: #7f8c8d;
  margin-top: 0;
}

/* Search and filter */
.search-filter-container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.search-filter {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.search-input-container {
  position: relative;
  flex-grow: 1;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: #7f8c8d;
}

.search-input {
  width: 95%;
  padding: 12px 15px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.search-input:focus {
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
  outline: none;
}

.category-select {
  padding: 12px 15px;
  border-radius: 8px;
  font-size: 16px;
  background-color: rgb(32, 30, 30);
  cursor: pointer;
}

.category-select:focus {
  outline: none;
}

/* Product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background: white;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.product-image-container {
  position: relative;
  padding-top: 75%; /* 4:3 aspect ratio */
  background: #f5f7fa;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 15px;
}

.product-details {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 1.1rem;
  margin: 0 0 8px 0;
  color: #2c3e50;
}

.product-description {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0 0 15px 0;
  flex-grow: 1;
}

.price-category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.price {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 0;
}

.category {
  color: #7f8c8d;
  font-size: 0.8rem;
  background: #f1f5f9;
  padding: 4px 8px;
  border-radius: 12px;
  margin: 0;
}

.add-to-cart {
  background-color: #0571d3;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #369f6b;
}

.disabled-btn {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.disabled-btn:hover {
  background-color: #95a5a6;
}

/* Stock badges */
.low-stock-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f39c12;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: bold;
}

.out-of-stock-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: bold;
}

/* No results */
.no-results {
  text-align: center;
  padding: 40px 20px;
  color: #7f8c8d;
}

.no-results-icon {
  width: 60px;
  height: 60px;
  fill: #bdc3c7;
  margin-bottom: 15px;
}

/* Floating Cart Button */
.floating-cart-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 999;
  transition: all 0.3s ease;
}

.floating-cart-btn:hover {
  background-color: #2980b9;
  transform: scale(1.1);
}

.floating-cart-btn.cart-has-items {
  background-color: #e74c3c;
  animation: pulse 1.5s infinite;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #2ecc71;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

/* Cart Sidebar */
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.cart-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.close-cart {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #7f8c8d;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  color: #bdc3c7;
}

.empty-cart i {
  font-size: 3rem;
  margin-bottom: 15px;
}

.empty-cart p {
  font-size: 1.1rem;
}

.cart-items {
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 15px;
  border-radius: 4px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-details h4 {
  margin: 0 0 5px 0;
  font-size: 1rem;
}

.cart-item-details p {
  margin: 0 0 10px 0;
  font-weight: bold;
  color: #2c3e50;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-btn {
  width: 25px;
  height: 25px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.qty-btn:hover {
  background: #f5f5f5;
}

.remove-item {
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1rem;
  padding: 5px;
}

.cart-summary {
  padding: 20px;
  border-top: 1px solid #eee;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #27ae60;
}

.clear-cart {
  width: 100%;
  padding: 10px;
  background: none;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.clear-cart:hover {
  background-color: #e74c3c;
  color: white;
}

/* Animations */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .search-filter {
    flex-direction: row;
  }
  
  .search-input {
    min-width: 300px;
  }
  
  .category-select {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .store-title {
    font-size: 1.8rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr;
  }
  
  .cart-sidebar {
    width: 100%;
  }
  
  .floating-cart-btn {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  .cart-badge {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
  }
}
</style>