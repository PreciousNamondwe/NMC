<script setup>
import Section from './Section.vue';
import HeadingContent from './HeadingContent.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="app-container">
    <main class="main-content">
      <HeadingContent/>
    </main>
    <section>
      <Section/>
    </section>
    <section>
      <Footer/>
    </section>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 40px;
  border-radius: 20px;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  
}

/* If you want the heading content to start right below the header */
.header + .main-content {
  padding-top: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
    margin-top: 0;
  }
}
</style>


