<template>
  <div class="services-container">
    <!-- Hero Section with Unsplash Image -->
    <div class="hero-section" style="background-image: url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')">
      <div class="hero-overlay">
        <h1>Our Medical Services</h1>
        <p>Comprehensive, Compassionate Care for You and Your Family</p>
      </div>
    </div>

  

    <!-- Core Services Section -->
    <div class="core-services">

      
      <div v-for="(category, index) in coreServices" :key="index" class="category-card">
        <div class="category-header">
          <div class="icon-container" :style="{ backgroundColor: category.color }">
            <i :class="category.icon"></i>
          </div>
          <h3>{{ category.title }}</h3>
        </div>
        <div class="category-content">
          <ul>
            <li v-for="(item, itemIndex) in category.items" :key="itemIndex">{{ item }}</li>
            <li v-if="category.subItems">
              {{ category.subTitle }}
              <ul>
                <li v-for="(subItem, subIndex) in category.subItems" :key="subIndex">{{ subItem }}</li>
              </ul>
            </li>
          </ul>
          <div 
            class="category-image"
            :style="{ backgroundImage: `url(${category.image})` }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Purchasing Section -->
    <div class="purchasing-section">
      <div class="purchasing-image" style="background-image: url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"></div>
      <div class="purchasing-content">
        <h3>Pharmacy & Medical Supplies</h3>
        <ul>
          <li>Secure online purchasing system</li>
          <li>Wide range of medications available</li>
          <li>Medical equipment for home care</li>
          <li>Fast and reliable delivery</li>
        </ul>
        <button class="order-button">Order Now</button>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section">
      <div class="contact-info">
        <h2>Contact Namondwe Medical Centre</h2>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>Balaka District along Liwonde Roadblock/Mangochi Turn-Off stretch</p>
        </div>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <p>0997771960</p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>info@namondwemedicalcentre.org</p>
        </div>
      </div>
      <div class="contact-image" style="background-image: url('https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      quickServices: [
        {
          title: "Emergency Call",
          description: "24/7 emergency medical support",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Birthing Care",
          description: "Compassionate maternity services",
          image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Cancer Care",
          description: "Specialized oncology treatments",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Orthopedics",
          description: "Bone and joint specialists",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Health Checkups",
          description: "Preventive care programs",
          image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
      ],
      coreServices: [
        {
          title: "Health Care Services",
          icon: "fas fa-user-md",
          color: "#3498db",
          image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          items: [
            "General Outpatient Care – Routine consultations and treatment for common illnesses.",
            "Specialist Consultations – Access to experienced medical specialists for advanced care."
          ],
          subTitle: "Pharmacy Services:",
          subItems: [
            "Dispensing of prescribed medications",
            "Over-the-counter medicines",
            "Patient counseling on safe and effective medication use"
          ]
        },
        {
          title: "Physiotherapy Services",
          icon: "fas fa-procedures",
          color: "#2ecc71",
          image: "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          items: [
            "Rehabilitation after injury or surgery",
            "Management of musculoskeletal disorders",
            "Pain relief therapies",
            "Personalized exercise and recovery programs"
          ]
        },
        {
          title: "Medical Equipment",
          icon: "fas fa-tools",
          color: "#e74c3c",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          items: [
            "Diagnostic devices and clinical tools",
            "Hospital furniture and surgical instruments",
            "Medical consumables and protective gear"
          ]
        },
        {
          title: "Medical Transport",
          icon: "fas fa-ambulance",
          color: "#f39c12",
          image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          items: [
            "24/7 Emergency Response & Ambulance Services",
            "Non-emergency patient transfers and referrals",
            "Delivery and distribution of medical supplies"
          ]
        }
      ]
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.services-container {
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  color: #2c3e50;
}

/* Hero Section */
.hero-section {
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 50px;
  border-radius: 10px;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
}

.hero-overlay h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-overlay p {
  font-size: 1.5rem;
  font-weight: 300;
  max-width: 700px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Quick Services */
.quick-services {
  padding: 0 20px;
  margin-bottom: 60px;
}

.quick-services h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #2c3e50;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.service-card {
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
}

.card-overlay h3 {
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.card-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Core Services */
.core-services {
  padding: 0 20px;
  margin-bottom: 60px;
}

.core-services h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #2c3e50;
}

.category-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.category-header {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #f8f9fa;
}

.icon-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  color: white;
  font-size: 1.2rem;
}

.category-header h3 {
  font-size: 1.5rem;
  margin: 0;
}

.category-content {
  display: flex;
}

.category-content ul {
  flex: 1;
  padding: 25px;
  list-style-type: none;
}

.category-content li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 25px;
  line-height: 1.5;
}

.category-content li:before {
  content: '•';
  color: #3498db;
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  left: 0;
}

.category-content ul ul li:before {
  content: '◦';
  color: #2ecc71;
}

.category-image {
  flex: 1;
  min-height: 250px;
  background-size: cover;
  background-position: center;
}

/* Purchasing Section */
.purchasing-section {
  display: flex;
  margin-bottom: 60px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.purchasing-image {
  flex: 1;
  min-height: 350px;
  background-size: cover;
  background-position: center;
}

.purchasing-content {
  flex: 1;
  padding: 40px;
  background: white;
}

.purchasing-content h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.purchasing-content ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;
}

.purchasing-content li {
  margin-bottom: 10px;
  padding-left: 25px;
  position: relative;
}

.purchasing-content li:before {
  content: '✓';
  color: #2ecc71;
  position: absolute;
  left: 0;
}

.order-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.order-button:hover {
  background: #2980b9;
}

/* Contact Section */
.contact-section {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
}

.contact-info {
  flex: 1;
  padding: 40px;
  background: white;
}

.contact-info h2 {
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #2c3e50;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.info-item i {
  color: #3498db;
  font-size: 1.2rem;
  margin-right: 15px;
  width: 20px;
  text-align: center;
}

.contact-image {
  flex: 1;
  min-height: 350px;
  background-size: cover;
  background-position: center;
}

/* Responsive Design */
@media (max-width: 992px) {
  .category-content {
    flex-direction: column;
  }
  
  .category-image {
    min-height: 200px;
  }
  
  .purchasing-section,
  .contact-section {
    flex-direction: column;
  }
  
  .purchasing-image,
  .contact-image {
    min-height: 250px;
  }
}

@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 2.5rem;
  }
  
  .hero-overlay p {
    font-size: 1.2rem;
  }
  
  .service-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 576px) {
  .hero-section {
    height: 300px;
  }
  
  .hero-overlay h1 {
    font-size: 2rem;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .purchasing-content,
  .contact-info {
    padding: 30px 20px;
  }
}
</style>