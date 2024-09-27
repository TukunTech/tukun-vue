
<script>
import { ref } from 'vue';
import DatePicker from 'vue3-datepicker';
import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default {
  name: 'ScheduleAppointmentsComponent',
  components: {
    ToolbarClinicComponent,
    DatePicker,
  },
  setup() {
    const date = ref(null);
    const minDate = new Date(); // Fecha mínima es hoy
    const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)); // Un año a partir de hoy

    // Variables del formulario
    const patient = ref('');
    const paymentMethod = ref('');
    const appointmentType = ref('');
    const doctor = ref('');
    const email = ref('');

    const updateClick = () => {
      alert("Correctly saved information");
    };

    return {
      date,
      minDate,
      maxDate,
      patient,
      paymentMethod,
      appointmentType,
      doctor,
      email,
      updateClick,
    };
  },
};
</script>

<template>

  <toolbar-clinic-component/>

  <div class="container">
    <!-- Botón de volver -->
    <router-link to="/appointments" class="btn-return">
      Return
    </router-link>

    <!-- Título -->
    <h1>Schedule Appointments</h1>

    <!-- Información del formulario -->
    <divider class="box-info">
      <label>Patient:</label>
      <input type="text" v-model="patient" class="patient-input" />

      <br />

      <label>Payment Method:</label>
      <divider class="radio-group">
        <label>
          <input type="radio" value="Cash" v-model="paymentMethod" />
          Cash
        </label>
        <label>
          <input type="radio" value="Credit" v-model="paymentMethod" />
          Credit
        </label>
      </divider>

      <br />

      <label>Type Appointments:</label>
      <select v-model="appointmentType" class="select-input">
        <option value="service">Service</option>
        <option value="consultation">Consultation</option>
      </select>



      <label>Doctor:</label>
      <select v-model="doctor" class="select-input">
        <option value="doctor1">Doctor 1</option>
        <option value="doctor2">Doctor 2</option>
      </select>



      <label>Email Patient:</label>
      <input type="email" v-model="email" class="email-input" />


      <label>Date:</label>
      <divider class="date-field">
        <DatePicker v-model="date" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
      </divider>


      <!-- Botón de guardar -->
      <Button class="btn-save" @click="updateClick">Save</Button>

    </divider>


  </div>
</template>


<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  font-family: 'Quicksand', sans-serif;
}

.date-field {
  display: flex;
  flex-direction: column;
  margin: 25px;
}



.patient-input {
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

.box-info2 {
  background: #d9d9d9;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  padding: 20px 30px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  margin-top: 2%;
}

.box-info label {
  font-size: 1.1rem;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
}

input,
select {
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

.email-input {
  width: 85.5%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
  color: black;
}

.radio-group {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

input[type='radio'] {
  margin-right: 5px;
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
