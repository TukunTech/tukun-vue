<script>
import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default {
  name: 'MedicalRegistrationComponent',
  components: {ToolbarClinicComponent},
  data() {
    return {
      form: {
        name: '',
        lastName: '',
        dni: '',
        gender: '',
        age: '',
        cmpCode: '',
        nationality: '',
        specialization: '',
        contact: ''
      }
    };
  },
  methods: {
    saveDoctorNurse() {
      console.log('Formulario enviado:', this.form);
    }
  }
};
</script>

<template>
  <toolbar-clinic-component/>


  <div class="registration-container">
    <router-link to="/registration" class="return-button">
      <button class="back-button">
        <span class="icon-arrow-left"></span> Return
      </button>
    </router-link>

    <h1 class="registration-title">Doctor/Nurse Registration</h1>

    <form class="registration-form" @submit.prevent="saveDoctorNurse">
      <div class="form-group">
        <label for="name">Names:</label>
        <input type="text" v-model="form.name" id="name" required />
      </div>

      <div class="form-group">
        <label for="lastName">Last name:</label>
        <input type="text" v-model="form.lastName" id="lastName" required />
      </div>

      <div class="form-group">
        <label for="dni">DNI:</label>
        <input type="text" v-model="form.dni" id="dni" required />
      </div>

      <div class="form-group">
        <label for="gender">Gender:</label>
        <select v-model="form.gender" id="gender" required>
          <option value="" disabled>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" v-model="form.age" id="age" required />
      </div>

      <div class="form-group">
        <label for="cmpCode">CMP Code:</label>
        <input type="text" v-model="form.cmpCode" id="cmpCode" required />
      </div>

      <div class="form-group">
        <label for="nationality">Nationality:</label>
        <input type="text" v-model="form.nationality" id="nationality" required />
      </div>

      <div class="form-group">
        <label for="specialization">Specialization:</label>
        <input type="text" v-model="form.specialization" id="specialization" required />
      </div>

      <div class="form-group">
        <label for="contact">Contact:</label>
        <input type="text" v-model="form.contact" id="contact" required />
      </div>

    </form>
    <router-link to="/home" class="form-actions">
      <button type="submit" class="save-button">Save</button>
    </router-link>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');

.registration-container {
  padding: 2rem;
  font-family: 'Quicksand', sans-serif;
  max-width: 1000px; /* Aumentamos el ancho */
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.registration-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.back-button {
  display: flex;
  align-items: center;
  background-color: #0099B2;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.icon-arrow-left {
  margin-right: 0.5rem;
}

.registration-form {
  background-color: #e5e5e5;
  padding: 2rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1.5rem 2rem;
  align-items: center;
}

.form-group {
  display: contents;
}

label {
  font-size: 1rem;
  font-weight: 500;
  text-align: right;
}

input, select {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.save-button {
  background-color: #0099B2;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  grid-column: 2 / 3;
}

.save-button:hover {
  background-color: #007a87;
}

.form-actions {
  margin-top: 1.5rem;
}
</style>



