<script>
import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default {
  name: 'RegistrationComponent',
  components: {ToolbarClinicComponent},

};
</script>

<template>

  <toolbar-clinic-component/>

  <div class="registration-container">
    <h1 class="registration-title">REGISTRATION</h1>
    <div class="images-container">
      <div class="image-box">
        <img src="/assets/reg-medical.png" alt="Medical Team" class="image1"/>
        <router-link to="/medical-registration" class="custom-button">Medical Team</router-link>
      </div>
      <div class="image-box">
        <img src="/assets/patient.png" alt="Patient" class="image2"/>
        <router-link to="/patient-registration" class="custom-button">Patient</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');

.registration-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Quicksand', sans-serif;
  margin-top:5%;

}

.registration-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.images-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.image-box {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.image1 {
  width: 500px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image2 {
  width: 418px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.custom-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #0097B2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  font-size: 1.1rem;
  text-align: center;
}

.custom-button:hover {
  background-color: #007a87;
  transform: translateY(-3px);
}
</style>
