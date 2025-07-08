<template>
  <div class="hero-container">
    <!-- Overlay -->
    <div class="overlay"></div>

    <div class="medical-services-card">
      <div class="medical-header">
        <h1 class="medical-title">Medical &</h1>
        <h1 class="medical-title">Health Care</h1>
        <h1 class="medical-title">Services</h1>
      </div>

      <p class="medical-description">
        We provide comprehensive, affordable and patient-centered health services.
      </p>

      <button class="getstarted-button">
        Get started
      </button>
    </div>
  </div>
</template>


<style scoped>
.hero-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  background-image: url('../assets/doctor.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px 0px 50px 0px;
  
}

/* Dark overlay to enhance contrast */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 30, 60, 0.5);
  border-radius: 50px 0px 50px 0px;
  z-index: 0;
}

/* Card styling */
.medical-services-card {
  position: relative;
  background-color: rgba(255, 255, 255, 0.6);
  color: #023e8a;
  padding: 2.5rem;
  border-radius: 20px;
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  z-index: 1;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease;
}

.medical-header {
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.medical-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  color: #023e8a;
  font-family: 'Segoe UI', sans-serif;
}

.medical-description {
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
  color: #333;
  font-family: 'Segoe UI', sans-serif;
}

.getstarted-button {
  background: #0571d3;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.getstarted-button:hover {
  background-color: #036bb2;
  transform: translateY(-2px);
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-container {
    padding: 1.5rem;
  }

  .medical-title {
    font-size: 2rem;
  }

  .medical-services-card {
    padding: 2rem;
  }
}

</style>
