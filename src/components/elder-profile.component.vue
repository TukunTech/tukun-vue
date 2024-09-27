<script>
import ToolbarElderComponent from "./toolbar-elder.component.vue";

export default {
  name: 'OlderAdultComponent',
  components: {ToolbarElderComponent},
  data() {
    return {
      profile: {
        name: '',
        lastName: '',
        dni: '',
        gender: null,
        age: null
      },
      genders: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' }
      ],
      medicines: [
        { name: 'Medication 1', dose: '1p' },
        { name: 'Medication 2', dose: '1p' },
        { name: 'Medication 3', dose: '1p' }
      ]
    };
  },
  methods: {
    editMedicine(medicine) {
      console.log('Edit:', medicine);
    },
    deleteMedicine(medicine) {
      console.log('Delete:', medicine);
    },
    addMedicine() {
      console.log('Add new medicine');
    }
  }
};
</script>

<template>

  <toolbar-elder-component/>

  <div class="profile-page">
    <!-- Botón Return y título -->
    <div class="header-container">
      <button class="return-button">← Return</button>
      <h2 class="profile-title">Profile of Older Adults</h2>
    </div>

    <div class="content-container">
      <!-- Primer contenedor: Formulario -->
      <div class="profile-form">
        <div class="form-row">
          <label for="name">Name:</label>
          <pv-input-text id="name" v-model="profile.name" placeholder="Enter Name" class="input-field" />
        </div>
        <div class="form-row">
          <label for="last-name">Last Name:</label>
          <pv-input-text id="last-name" v-model="profile.lastName" placeholder="Enter Last Name" class="input-field" />
        </div>
        <div class="form-row">
          <label for="dni">DNI:</label>
          <pv-input-text id="dni" v-model="profile.dni" placeholder="Enter DNI" class="input-field" />
        </div>
        <div class="form-row">
          <label for="gender">Gender:</label>
          <pv-dropdown id="gender" v-model="profile.gender" :options="genders" option-label="label" placeholder="Select Gender" class="input-field" />
        </div>
        <div class="form-row">
          <label for="age">Age:</label>
          <pv-input-number id="age" v-model="profile.age" placeholder="Enter Age" class="input-field" />
        </div>
      </div>

      <!-- Botón Update -->
      <pv-button label="Update Profile" class="p-button-success update-button" />

      <!-- Segundo contenedor: Medicines -->
      <div class="profile-medicine">
        <h3>Medicine:</h3>
        <pv-data-table :value="medicines" class="medicine-table">
          <pv-column field="name" header="Name"></pv-column>
          <pv-column field="dose" header="Dose"></pv-column>
          <pv-column>
            <template #body="slotProps">
              <div class="button-group">
                <pv-button icon="pi pi-pencil" class="p-button-warning p-button-sm" @click="editMedicine(slotProps.data)" />
                <pv-button icon="pi pi-trash" class="p-button-danger p-button-sm" @click="deleteMedicine(slotProps.data)" />
              </div>
            </template>
          </pv-column>
        </pv-data-table>
        <pv-button label="Add Drugs" icon="pi pi-plus" class="p-button-info add-drugs-button" @click="addMedicine" />
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Estilo general de la página */
.profile-page {
  padding: 2rem;
  display: flex;
  flex-direction: column; /* Cambiado para que los elementos se alineen en columna */
  align-items: center; /* Centrado horizontal */
}

/* Contenedor del botón Return y título */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%; /* Asegurar que ocupe el ancho completo */
}

.return-button {
  position: absolute;
  top: 70px;
  left: 20px;
  background-color: #20BFC2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
}

.profile-title {
  font-size: 1.8rem;
  font-weight: bold;
}

/* Contenedor principal */
.content-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  max-width: 700px; /* Contenedor reducido */
  background-color: #efefef;
  padding: 2rem;
  border-radius: 16px; /* Bordes suavizados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilo del formulario */
.profile-form {
  width: 100%;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}

label {
  font-size: 1rem;
  width: 40%;
  text-align: left;
}

.input-field {
  width: 55%;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none; /* Eliminar el borde negro */
  box-shadow: 0 0 5px rgb(196, 195, 195); /* Añadir sombra sutil */
}

.update-button {
  margin-top: 1.5rem;
  padding: 0.5rem 1.2rem;
  background-color: #0097B2;
  color: white;
  border-radius: 12px;
  align-self: flex-start;
  border: none; /* Eliminar el borde negro */
}

/* Estilo de la tabla de medicamentos */
.profile-medicine {
  width: 100%;
}

.medicine-table {
  margin-top: 1.5rem;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

.p-button-sm {
  padding: 0.4rem 0.6rem;
}

.add-drugs-button {
  margin-top: 1.5rem;
  width: 100%;
  font-size: 1.1rem;
  padding: 0.8rem;
  border-radius: 12px;
  border: none; /* Eliminar el borde negro */
  background-color: #0097B2;
  color: white; /* Cambiado a texto blanco */
}
</style>