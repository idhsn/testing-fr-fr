// cart.js
// Handles localStorage cart state

class Cart {
  constructor() {
    this.storageKey = 'juzey_cart';
    this.items = this.loadCart();
    this.updateCartCount();
  }

  loadCart() {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  saveCart() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    this.updateCartCount();
  }

  addItem(product, quantity = 1, size = '50ml') {
    const existingItem = this.items.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...product,
        quantity,
        size
      });
    }
    
    this.saveCart();
    
    // Optional: show a toast or alert
    // alert(`${product.name} added to cart!`);
  }

  removeItem(productId, size) {
    this.items = this.items.filter(item => !(item.id === productId && item.size === size));
    this.saveCart();
  }

  updateQuantity(productId, size, newQuantity) {
    if (newQuantity < 1) return;
    
    const item = this.items.find(item => item.id === productId && item.size === size);
    if (item) {
      item.quantity = newQuantity;
      this.saveCart();
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalCount = this.items.reduce((count, item) => count + item.quantity, 0);
    
    countElements.forEach(el => {
      el.textContent = totalCount;
      if (totalCount === 0) {
        el.style.display = 'none';
      } else {
        el.style.display = 'flex';
      }
    });
  }
}

// Initialize global cart
const cart = new Cart();
