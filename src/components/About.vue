<template>
  <div class="about-container">
  

    <!-- About Content -->
    <section class="about-section">
        <!-- Hero Section -->
    <div class="hero-container">
    <!-- Overlay -->
    <div class="overlay"></div>

    <div class="medical-services-card">
      <div class="medical-header">
        <h1 class="medical-title">About</h1>
        <h1 class="medical-title">US &</h1>
        <h1 class="medical-title">Core Values</h1>
      </div>

      <p class="medical-description">
        We provide comprehensive, affordable and patient-centered health services.
      </p>

      <button class="getstarted-button">
        Learn More
      </button>
    </div>
  </div>

      <div class="about-content">
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
               alt="Namondwe Medical Center" 
               @error="handleImageError">
        </div>
        <div class="about-text">
          <p class="about-nmc">Namondwe Medical Center (NMC) is more than just a health facility - it's the fulfillment of a lifelong dream built on compassion, resilience, and dedication to quality healthcare.</p>
          
          <div class="founder-card">
            <img src="../assets/bigman.jpeg" 
                 alt="Mr. Peter John Namondwe" 
                 class="founder-image"
                 @error="handleImageError">
            <div>
              <h3>Mr. Peter John Namondwe</h3>
              <p class="founder-title">Founder & Former Anaesthetic Clinical Therapist</p>
            </div>
          </div>

          <p class="about-nmc">With over 40 years of service in Malawi's public health sector, our founder envisioned a facility that would embody his values of service, excellence, and integrity. Today, NMC is a family-owned medical center operated by healthcare professionals committed to your wellbeing.</p>
        </div>
      </div>

      <div class="mission-vision">
        <div class="mission-card">
          <div class="icon">
            <svg viewBox="0 0 24 24"><path d="M12,2L4,5v6.09c0,5.05 3.41,9.76 8,10.91c4.59-1.15 8-5.86 8-10.91V5L12,2z"/></svg>
          </div>
          <h3>Our Vision</h3>
          <p>To become one of Malawi's most trusted and dependable private medical centers, delivering compassionate and quality healthcare services to all.</p>
        </div>

        <div class="vision-card">
          <div class="icon">
            <svg viewBox="0 0 24 24"><path d="M12,3L2,12h3v8h6v-6h2v6h6v-8h3L12,3z"/></svg>
          </div>
          <h3>Our Mission</h3>
          <p>To provide comprehensive, affordable, and patient-centered health services through family values, professional expertise, and community commitment.</p>
        </div>
      </div>

      <div class="values-section">
        <h3>Our Core Values: CARE-FC</h3>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <span class="value-letter">{{ value.letter }}</span>
            <div>
              <h4>{{ value.title }}</h4>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="contact-info">
      <h3>Visit Us</h3>
      <div class="contact-details">
        <div class="contact-item">
          <LocationIcon />
          <span>Balaka District, Liwonde Roadblock/Mangochi Turn-Off</span>
        </div>
        <div class="contact-item">
          <PhoneIcon />
          <span>0997771960</span>
        </div>
        <div class="contact-item">
          <EmailIcon />
          <span>info@namondwemedicalcentre.org</span>
        </div>
      </div>
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d35.123456!3d-15.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA3JzI0LjQiUyAzNcKwMDcnMjQuNCJF!5e0!3m2!1sen!2smw!4v1234567890123!5m2!1sen!2smw" 
          width="100%" 
          height="300" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    LocationIcon: {
      template: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
    },
    PhoneIcon: {
      template: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>`
    },
    EmailIcon: {
      template: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
    }
  },
  data() {
    return {
      values: [
        {
          letter: 'C',
          title: 'Compassion',
          description: 'We care deeply and treat every patient with empathy, dignity, and respect.'
        },
        {
          letter: 'A',
          title: 'Accountability',
          description: 'We uphold high standards, responsibility, ethics, and transparency.'
        },
        {
          letter: 'R',
          title: 'Respect',
          description: 'We value every individual and relationship in a supportive environment.'
        },
        {
          letter: 'E',
          title: 'Excellence',
          description: 'We strive for the highest quality in everything we do.'
        },
        {
          letter: 'F',
          title: 'Family-Centered',
          description: 'We work together to promote care that includes and supports the whole family.'
        },
        {
          letter: 'C',
          title: 'Community Focus',
          description: 'We are committed to reaching underserved populations and improving public health.'
        }
      ]
    }
  },
  methods: {
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available'
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.about-container {
  font-family: 'Segoe UI', Roboto, sans-serif;
  color: #2d3748;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1, h2, h3, h4 {
  color: #0571d3;
  font-weight: 700;
}
.namo{
  color: #fff;
}

p {
  color: #111;
}
.about {
  position: relative;
  color: #fff;
  font-weight: bold;
  background-color: rgba(1, 0, 0, 0.5);
  text-decoration: underline;
  text-decoration-color: #0571d3;
  width: 180px;
  text-underline-offset: 4px;
  border-radius: 0 0 10px 10px;
  
  /* Create slanted left side */
  clip-path: polygon(
    15% 0%,  /* Top left point (pushed in 15%) */
    100% 0%, /* Top right point */
    100% 100%, /* Bottom right point */
    0% 100%   /* Bottom left point (straight) */
  );
}
/* Hero Section */
.hero-section {
  background: url('https://imgs.search.brave.com/Q62ejNy3wNmiJgIpivA-TzanTTT1b_8kX4AQWYqQLL4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZGZp/bnN0cnVtZW50cy5j/b20vY2RuL3Nob3Av/ZmlsZXMvbWRmLW1k/LW9uZS1hZHVsdC1z/dGV0aG9zY29wZS1i/bGFjay13aGl0ZW91/dC1tYWluLmpwZz92/PTE3Mzc2Mjc1NzYm/d2lkdGg9MjAwMA');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 0 0 20px 20px;
}
.hero-content{
  background-color: #0571d3;
  border-radius: 0px 30px 0px 30px;
}
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
  margin-top: 30px;
  
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

/* About Content */
.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
  margin-top: 40px;
}

.about-image {
  flex: 1;
  min-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 400px;
  transition: transform 0.3s ease;
}

.about-image img:hover {
  transform: scale(1.02);
}

.about-text {
  flex: 1;
  min-width: 300px;
  padding: 0 1rem;
  background-color:#91bfeb;
}

.founder-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px 0px 30px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.founder-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #2b6cb0;
}

.founder-title {
  font-size: 0.9rem;
  color: #718096;
  margin-top: 0.25rem;
}

/* Mission & Vision */
.mission-vision {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
}

.mission-card, .vision-card {
  flex: 1;
  min-width: 300px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-top: 4px solid #2b6cb0;
  transition: transform 0.3s ease;
}

.mission-card:hover, .vision-card:hover {
  transform: translateY(-5px);
}

.vision-card {
  border-top-color: #38a169;
}

.icon {
  width: 50px;
  height: 50px;
  background: #ebf8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon svg {
  width: 24px;
  height: 24px;
  fill: #2b6cb0;
}

/* Values Section */
.values-section {
  background: #f7fafc;
  padding: 3rem 1rem;
  margin: 3rem 0;
  border-radius: 8px;
}

.values-section h3 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.value-card {
  display: flex;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.value-letter {
  font-size: 2rem;
  font-weight: bold;
  color: #2b6cb0;
  min-width: 40px;
}

/* Contact Info */
.contact-info {
  background: #2b6cb0;
  color: white;
  padding: 3rem 1rem;
  border-radius: 8px;
  margin-top: 3rem;
  text-align: center;
}

.contact-info h3 {
  color: white;
  margin-bottom: 1.5rem;
}

.contact-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}

.contact-item svg {
  width: 20px;
  height: 20px;
  color: #bee3f8;
}

.map-container {
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1rem;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .tagline {
    font-size: 1rem;
  }
  
  .about-content {
    flex-direction: column;
  }
  
  .mission-card, .vision-card {
    min-width: 75%;
  }
  
  .contact-details {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 3rem 1rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .founder-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>