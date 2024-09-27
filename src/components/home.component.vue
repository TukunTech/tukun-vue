<script>

import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default {
  name: 'HomeComponent',
  components: {ToolbarClinicComponent},


};
</script>

<template>

  <toolbar-clinic-component/>


  <div class="welcome-container">
    <h1 class="welcome-title">Welcome:</h1>
    <h2 class="welcome-subtitle">Where do you want to start?</h2>
    <div class="buttons-container">
      <router-link to="/postoperative" class="custom-button">Postoperative Patients</router-link>
      <router-link to="/icu" class="custom-button">ICU Patients</router-link>
      <router-link to="/registration" class="custom-button">Registration</router-link>
      <router-link to="/patients" class="custom-button">Patients</router-link>
      <router-link to="/doctors" class="custom-button">Doctors</router-link>
      <router-link to="/appointments" class="custom-button">Appointments</router-link>
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
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem;
  font-family: 'Quicksand', sans-serif;
  height: 100vh;
}

.welcome-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
  margin-top:3%;
}

.welcome-subtitle {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  margin-left: 40%;
  margin-top:5%;
}

.buttons-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 600px;
  margin-left: 35%;
  margin-top:2%;

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


