<template>
  <div class="ambulance-container">
    <img 
      src="../assets/ambu.gif" 
      alt="Moving Ambulance" 
      class="ambulance-gif"
    />
  </div>
</template>

<style scoped>
.ambulance-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.ambulance-gif {
  width: 90px;
  height: auto;
  transform: scaleX(-1); /* This flips the image horizontally */
  position: absolute;
  animation: moveAmbulance 4s ease-in-out infinite alternate;
}

@keyframes moveAmbulance {
  0% {
    transform: scaleX(-1) translateX(-100%);
  }
  100% {
    transform: scaleX(-1) translateX(100%);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ambulance-gif {
    width: 70px;
  }
  
  @keyframes moveAmbulance {
    0% {
      transform: scaleX(-1) translateX(-50%);
    }
    100% {
      transform: scaleX(-1) translateX(50%);
    }
  }
}

@media (max-width: 480px) {
  .ambulance-gif {
    width: 60px;
  }
  
  @keyframes moveAmbulance {
    0% {
      transform: scaleX(-1) translateX(-40%);
    }
    100% {
      transform: scaleX(-1) translateX(40%);
    }
  }
}
</style>