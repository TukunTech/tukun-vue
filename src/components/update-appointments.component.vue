
<script>
import DatePicker from "vue3-datepicker";
import { ref } from "vue";
import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default {
  name: 'UpdateAppointmentsComponent',
  components: {
    ToolbarClinicComponent,
    DatePicker,
  },
  setup() {
    const currentDate = ref(null);
    const newDate = ref(null);
    const minDate = new Date();
    const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    const patient = ref('');
    const dni = ref('');
    const appointmentType = ref('');
    const doctor = ref('');

    const updateClick = () => {
      alert("Correctly saved information");
    };

    return {
      currentDate,
      newDate,
      minDate,
      maxDate,
      patient,
      dni,
      appointmentType,
      doctor,
      updateClick,
    };
  },
};
</script>

<template>
  <toolbar-clinic-component/>

  <divider class="container">
    <!-- Botón de volver -->
    <router-link to="/reschedule" class="btn-return">
      Return
    </router-link>

    <!-- Título -->
    <h1>Reschedule Appointments</h1>

    <!-- Información del formulario -->
    <divider class="box-info">
      <label>Patient:</label>
      <input type="text" v-model="patient" class="patient-input" />

      <br />

      <label>DNI:</label>
      <input type="text" v-model="dni" class="dni-input" />

      <br />
      <label>Type Appointments:</label>
      <select v-model="appointmentType" class="select-input">
        <option value="service">Service</option>
        <option value="consultation">Consultation</option>
      </select>

      <br />

      <label>Doctor:</label>
      <select v-model="doctor" class="select-input">
        <option value="doctor1">Doctor 1</option>
        <option value="doctor2">Doctor 2</option>
      </select>

      <br />

      <divider class="date-container">
        <divider class="date-field">
          <label class="date-label">Date:</label>
          <DatePicker v-model="currentDate" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
        </divider>

        <divider class="date-field">
          <label class="date-label">New Date:</label>
          <DatePicker v-model="newDate" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
        </divider>

      </divider>

      <br />

      <Button class="btn-save" @click="updateClick">Update</Button>
    </divider>
  </divider>
</template>

<style scoped>
.date-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.date-field {
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-left: 25px;
}



.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  font-family: 'Quicksand', sans-serif;
}

.patient-input,
.dni-input {
  width: 85.5%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
  color: black;
}

h1 {
  text-align: center;
  color: black;
  font-family: 'Quicksand', sans-serif;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: -2%;
}

.box-info {
  background: #d9d9d9;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  padding: 20px 30px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
}

.box-info label {
  font-size: 1.1rem;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
}

input, select {
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
  color: black;
  margin-top: 10px;
  margin-left: 20px;
}

.btn-save {
  display: block;
  width: 80%;
  padding: 15px;
  background-color: #38b6b4;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 8%;
  text-decoration: none;

}

.btn-save:hover {
  background-color: #2f8c8a;
}

.btn-return {
  display: block;
  width: 20%;
  padding: 15px;
  background-color: #38b6b4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 5%;
  text-decoration: none;
}

.btn-return:hover {
  background-color: #00565a;
}
</style>
