<script>
import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default {
  name: 'IcuPatients',
  components: {ToolbarClinicComponent},
  data() {
    return {
      patients: [
        { bed: '001', name: 'Axel Giglio Pariona', hr: 62, nibbp: '112 / 75', spo2: 98, temp: 36.7 },
        { bed: '002', name: 'Erick Maraza ', hr: 62, nibbp: '112 / 75', spo2: 98, temp: 36.7 },
        { bed: '003', name: 'Oscar Soto', hr: 62, nibbp: '112 / 75', spo2: 98, temp: 36.7 }
      ]
    };
  }
};
</script>

<template>

  <toolbar-clinic-component/>

  <div class="icu-container">
    <div class="patient-card" v-for="patient in patients" :key="patient.bed">
      <div class="bed-info">
        <h2>Bed {{ patient.bed }} : {{ patient.name }}</h2>
      </div>
      <div class="vitals">
        <div class="vital-sign">
          <span>HR</span>
          <span :class="{'high': patient.hr > 60}">{{ patient.hr }}</span>
        </div>
        <div class="vital-sign">
          <span>NIBP</span>
          <span :class="{'normal': patient.nibbp === '112 / 75'}">{{ patient.nibbp }}</span>
        </div>
        <div class="vital-sign">
          <span>SpO2</span>
          <span :class="{'normal': patient.spo2 >= 95}">{{ patient.spo2 }}</span>
        </div>
        <div class="vital-sign">
          <span>Temp</span>
          <span>{{ patient.temp.toFixed(1) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');

.icu-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 5%;
  font-family: 'Quicksand', sans-serif;
}

.patient-card {
  background-color: #c2c3c3;
  border-radius: 8px;
  box-shadow: 5px 2px 8px rgba(0, 0, 0, 0.30);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bed-info h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
}

.vitals {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.vital-sign {
  display: flex;
  justify-content: space-between;
  background-color: #e0e0e0;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
}

.vital-sign span {
  font-weight: 600;
}

.vital-sign .high {
  color: red;
}

.vital-sign .normal {
  color: green;
}
</style>
