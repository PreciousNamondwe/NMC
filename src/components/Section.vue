<script setup>
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CalendarIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="doctors-section">

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <MagnifyingGlassIcon class="icon" />
        </div>
        <h3 class="feature-title">Open & Closing Time</h3>
        <p class="feature-description">It is 24/7 working making sure that more lives are saved.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <MapPinIcon class="icon" />
        </div>
        <h3 class="feature-title">Locations & Directions</h3>
        <p class="feature-description">Liwonde, Roadblock and Mangochi Turn-Off. Get directions!</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <CalendarIcon class="icon" />
        </div>
        <h3 class="feature-title">Appointments</h3>
        <p class="feature-description">Book Appointment to meet the doctor both physical or online(virtual)</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.doctors-section {
  padding: 4rem 2rem;
  background-color: transparent;
  text-align: center;

}

.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  color: #0571d3;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background-color: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon .icon {
  width: 24px;
  height: 24px;
  color: #0571d3;
}

.feature-title {
  font-size: 1.5rem;
  color: #343a40;
  margin-bottom: 1rem;
}

.feature-description {
  color: #6c757d;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .doctors-section {
    padding: 3rem 1rem;
    margin-top: 120%;
    margin-left: 40px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}
</style>