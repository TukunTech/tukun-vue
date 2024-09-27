<script>
import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default {
  name: 'PatientsListComponent',
  components: {ToolbarClinicComponent},
  data() {
    return {
      patients: [
        { name: 'Fabio', age: 20, bedNumber: '12B', insurance: 'Private' },
        { name: 'Adriana', age: 21, bedNumber: '8A', insurance: 'Public' },
      ],
      searchQuery: ''
    };
  },
  computed: {
    filteredPatients() {
      return this.patients.filter((patient) => {
        return patient.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            patient.age.toString().includes(this.searchQuery.toLowerCase()) ||
            patient.bedNumber.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            patient.insurance.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
};
</script>

<template>
  <toolbar-clinic-component/>

  <div class="patients-list-container">
    <h1 class="list-title">Patients</h1>

    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search patient..." />
      <button class="search-button">
        <i class="fas fa-search"></i>
      </button>
    </div>

    <table class="patients-table">
      <thead>
      <tr>
        <th>Patient Name</th>
        <th>Age</th>
        <th>Bed number</th>
        <th>Insurance</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="patient in filteredPatients" :key="patient.name">
        <td>{{ patient.name }}</td>
        <td>{{ patient.age }}</td>
        <td>{{ patient.bedNumber }}</td>
        <td>{{ patient.insurance }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');



/* Contenedor principal */
.patients-list-container {
  padding: 2rem;
  font-family: 'Quicksand', sans-serif;
  width: 70%;
  max-width: none;
  margin: 5% auto;
}

/* Estilo del título */
.list-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 2rem;
}

/* Barra de búsqueda */
.search-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
}

.search-bar input {
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 300px;
}

.search-button {
  margin-left: 0.5rem;
  background-color: #0099B2;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}

/* Estilo de la tabla */
.patients-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;
}

.patients-table th, .patients-table td {
  padding: 1.5rem;
  border: 1px solid #ccc;
  text-align: left;
}

.patients-table th {
  background-color: #0099B2;
  color: white;
  font-weight: 600;
}

.patients-table td {
  background-color: #f5f5f5;
}

.patients-table tr:hover td {
  background-color: #e0f7fa;
}
</style>
