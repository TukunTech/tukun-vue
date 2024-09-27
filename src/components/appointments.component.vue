<script>
import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default{
  name: 'AppointmentsComponent',
  components: {ToolbarClinicComponent},

}
</script>


<template>
  <toolbar-clinic-component/>

  <divider class="appointment-container">
    <h1>Appointments</h1>

    <divider class="appointment-options">
      <!-- Opción Agendar Cita -->
      <divider class="option">
        <img src="/assets/img1_citas.png" alt="Schedule Appointment" class="image-1">
        <router-link to="/schedule" class="btn">Schedule Appointment</router-link>
      </divider>

      <!-- Opción Actualizar/Reagendar Cita -->
      <divider class="option">
        <img src="/assets/img2_citas.png" alt="Update Appointment" class="image-2">
        <router-link to= "/reschedule" class="btn">Update/Reschedule Appointment</router-link>
      </divider>
    </divider>
  </divider>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');

.appointment-container {
  text-align: center;
  padding: 20px;
  font-family: Quicksand, sans-serif;
  margin-top:10rem;
}

h1 {
  margin-top: 7%;
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
}

.appointment-options {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 5%;
}

.option {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.image-1 {
  width: 80%;
  height: auto;
  max-width: 400px;
}

.image-2 {
  width: 85.4%;
  height: auto;
  max-width: 400px;
}

.btn {
  border-radius: 20px;
  background: #0097B2;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.40);
  width: 100%;
  max-width: 300px;
  color: #FFF;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
}

.btn:hover {
  background-color: #007BB5;
}

/* Media queries para pantallas más pequeñas */
@media (max-width: 768px) {
  .appointment-options {
    flex-direction: column;
    align-items: center;
  }

  .image {
    width: 90%;
    max-width: 250px;
  }

  .btn {
    width: 90%;
    max-width: 250px;
  }

  h1 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .btn {
    font-size: 16px;
    height: 50px;
  }

  h1 {
    font-size: 24px;
  }
}
</style>