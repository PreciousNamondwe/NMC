<template>
  <footer class="nmc-footer">
    <!-- Top Footer Section -->
    <div class="footer-top">
      <div class="footer-column">
        <div class="logo-section">
          <h3>Namondwe Medical Center</h3>
          <p>Comprehensive. Compassionate. Committed to Your Health.</p>
        </div>
        <div class="social-links">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <div class="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Core Services</h4>
        <ul>
          <li><a href="#">Emergency Care</a></li>
          <li><a href="#">Primary Care</a></li>
          <li><a href="#">Women's Health</a></li>
          <li><a href="#">Pediatric Care</a></li>
          <li><a href="#">Pharmacy Services</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Contact Info</h4>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>Balaka District, Liwonde Roadblock<br>Mangochi Turn-Off, Malawi</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <p>0997771960</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <p>info@namondwemedicalcentre.org</p>
        </div>
      </div>
    </div>

    <!-- Middle Footer Section -->
    <div class="footer-middle">
      <div class="newsletter">
        <h4>Subscribe to Our Newsletter</h4>
        <form class="newsletter-form">
          <input type="email" placeholder="Your email address">
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    <!-- Bottom Footer Section -->
    <div class="footer-bottom">
      <div class="copyright">
        <p>&copy; 2023 Namondwe Medical Center. All Rights Reserved.</p>
      </div>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NMCFooter'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.nmc-footer {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #1a3a6a, #2c3e50);
  color: white;
  padding: 50px 0 0;
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 0 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  margin-bottom: 30px;
}

.logo-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
}

.logo-section p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #3498db;
  transform: translateY(-3px);
}

.footer-column h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-column h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background: #3498db;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-column ul li a:hover {
  color: #3498db;
  padding-left: 5px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.contact-item i {
  margin-right: 15px;
  color: #3498db;
  margin-top: 3px;
}

.contact-item p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.5;
}

.footer-middle {
  background: rgba(0, 0, 0, 0.2);
  padding: 30px 50px;
  margin-top: 30px;
}

.newsletter {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.newsletter h4 {
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 0.95rem;
}

.newsletter-form button {
  background: #3498db;
  color: white;
  border: none;
  padding: 0 25px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
}

.newsletter-form button:hover {
  background: #2980b9;
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  padding: 20px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #3498db;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    padding: 0 30px;
  }
  
  .footer-middle {
    padding: 30px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 10px;
    padding: 20px 30px;
  }
  
  .newsletter-form {
    flex-direction: column;
    gap: 10px;
  }
  
  .newsletter-form input,
  .newsletter-form button {
    width: 100%;
    border-radius: 4px;
  }
}

@media (max-width: 480px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  
  .footer-column {
    text-align: center;
  }
  
  .footer-column h4::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .social-links {
    justify-content: center;
  }
  
  .contact-item {
    justify-content: center;
  }
}
</style>