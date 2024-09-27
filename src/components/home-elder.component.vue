<script>
import ToolbarElderComponent from "./toolbar-elder.component.vue";

export default {
  name: 'HomeElderComponent',
  components: {ToolbarElderComponent},
};
</script>

<template>

  <toolbar-elder-component/>

  <div class="welcome-container">
    <h1 class="welcome-title">Welcome:</h1>
    <h2 class="welcome-subtitle">Where do you want to start?</h2>
    <div class="buttons-container">
      <router-link to="/vs-panel" class="custom-button"> Vital Signs Panel</router-link>
      <router-link to="/elder-profile" class="custom-button"> Older Adult Profile</router-link>
      <router-link to="/emergency-number" class="custom-button">Emergency Numbers</router-link>
      <router-link to="/reminders" class="custom-button">Reminders</router-link>
      <router-link to="/technical-support" class="custom-button">Technical Support</router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');

body {
  font-family: 'Quicksand', sans-serif;
}

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Alineación horizontal */
  justify-content: center; /* Alineación vertical */
  padding: 2rem;
  height: 100vh; /* Ocupa toda la altura de la pantalla */
  text-align: center;
}

.welcome-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 100%;
}

.welcome-subtitle {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.buttons-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 600px;
}

.custom-button {
  display: inline-block;
  padding: 1.5rem 3rem;
  background-color: #0099B2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  font-size: 1.3rem;
  text-align: center;
}

.custom-button:hover {
  background-color: #007a87;
  transform: translateY(-3px);
}
</style>