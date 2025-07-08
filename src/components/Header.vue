<script setup>
import { 
  UserIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/vue/24/outline'; 
import { ref } from 'vue';

const isLoginActive = ref(true);
const activeTab = ref('home');

const toggleAuth = () => {
  isLoginActive.value = !isLoginActive.value;
};

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <header class="header">
    <nav class="nav-bar">
      <div class="logo">
        <span class="nmc">NMC</span>
      </div>
      
      <!-- desktop -->
      <div class="desktop-nav">
        <div class="nav-center-container">
          <ul class="list-items">
            <li>
  <router-link to="/" class="item-link" active-class="active" exact>
    Home
  </router-link>
</li>
<li>
  <router-link to="/about" class="item-link" active-class="active">
    About
  </router-link>
</li>
<li>
  <router-link to="/services" class="item-link" active-class="active">
    Services
  </router-link>
</li>
<li>
  <router-link to="/store" class="item-link" active-class="active">
    Store
  </router-link>
</li>
          </ul>
        </div>
      </div>
      
      <!-- Auth Buttons -->
      <div class="auth-buttons">
        <button 
          :class="['auth-btn', { 'active': isLoginActive }]" 
          @click="toggleAuth"
        >
          <span class="btn-content">
            <ArrowRightOnRectangleIcon class="btn-icon" />
            <span>Login</span>
          </span>
        </button>
        <button 
          :class="['auth-btn', { 'active': !isLoginActive }]" 
          @click="toggleAuth"
        >
          <span class="btn-content">
            <UserIcon class="btn-icon" />
            <span>Sign Up</span>
          </span>
        </button>
      </div>
      
      <!-- Mobile Menu Toggle -->
      <input type="checkbox" id="menu-toggle" class="menu-toggle" />
      <label for="menu-toggle" class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </label>
      
      <!-- Mobile Menu (Auth Only) -->
      <div class="mobile-menu">
        <div class="auth-buttons-mobile">
          <button 
            :class="['auth-btn', { 'active': isLoginActive }]" 
            @click="toggleAuth"
          >
            <ArrowRightOnRectangleIcon class="btn-icon" />
            <span>Login</span>
          </button>
          <button 
            :class="['auth-btn', { 'active': !isLoginActive }]" 
            @click="toggleAuth"
          >
            <UserIcon class="btn-icon" />
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
    background: linear-gradient(
    119deg, /* Forward-slash angle (adjust if needed) */
    #fff 68.114%, /* White (80% of the space) */
    #0571d3 60% /* Blue (starts at 80%, creating a sharp line) */
  );
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  z-index: 101;
  flex-shrink: 0;
}

.nmc {
  color: black;
  font-weight: bold;
  font-size: 22px;
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
  flex-grow: 1;
}

.nav-center-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.list-items {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-items li {
  margin: 0 15px;
}

.item-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 5px 0;
  position: relative;
  white-space: nowrap;

}



.item-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #0571d3;
}

/* Auth Buttons */
.auth-buttons {
  display: none;
  gap: 10px;
  flex-shrink: 0;
  margin-left: auto;
}

.auth-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
}

.auth-btn.active {
  background: white;
  color: #333;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-icon {
  width: 18px;
  height: 18px;
  color: #0571d3;
}

/* Mobile Menu */
.menu-toggle {
  display: none;
}

.hamburger {
  display: none;
  cursor: pointer;
  z-index: 101;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: #333;
  transition: all 0.3s ease;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  height: 100vh;
  background-color: #fff;
  padding: 80px 20px 20px;
  transition: left 0.3s ease;
  z-index: 100;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.auth-buttons-mobile {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
}

.auth-buttons-mobile .auth-btn {
  justify-content: center;
  width: 100%;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header{
    background-image:url("../assets/nav.jpg");
    background-attachment: fixed; /* Better performance on mobile */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10px 20px;
    width: 100%;
     
  }
  .nmc{
    color: #fff;
  }
 
  
  .hamburger {
    display: block;
  }
  
  .menu-toggle:checked ~ .mobile-menu {
    left: 0;
  }
  
  .menu-toggle:checked + .hamburger .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .menu-toggle:checked + .hamburger .bar:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle:checked + .hamburger .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

@media (min-width: 769px) {
  .desktop-nav {
    display: flex;
  }
  
  .auth-buttons {
    display: flex;
  }
  
  .mobile-menu,
  .mobile-tabs,
  .hamburger {
    display: none;
  }
}
</style>