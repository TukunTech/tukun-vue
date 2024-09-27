
<script>
import ToolbarElderComponent from "./toolbar-elder.component.vue";

export default {
  name: 'VsPanelComponent',
  components: {ToolbarElderComponent},
  data() {
    return {
      name: 'Emilia Altamirano Gavidia',
      hr: 62,
      nipb: '112 / 75',
      spo2: 98,
      temp: 36.7,
      hasAlerts: false,
    };
  },
};
</script>


<template>

  <toolbar-elder-component/>

  <div class="vital-signs-container">
    <div class="vital-signs-panel">
      <h2>{{ name }}</h2>
      <div class="vital-sign">
        <div class="label">HR</div>
        <div class="value">{{ hr }} bpm</div>
      </div>
      <div class="vital-sign">
        <div class="label">NIPB</div>
        <div class="value">{{ nipb }} mmHg</div>
      </div>
      <div class="vital-sign">
        <div class="label">SpO2</div>
        <div class="value">{{ spo2 }} %</div>
      </div>
      <div class="vital-sign">
        <div class="label">Temp</div>
        <div class="value">{{ temp }} °C</div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="alerts-panel">
      <h3>Alerts</h3>
      <div class="alert" :class="{ 'no-alerts': !hasAlerts }">
        <i class="pi pi-exclamation-triangle" v-if="!hasAlerts"></i>
        <span v-if="!hasAlerts">No alerts</span>
        <span v-else>Alert active</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vital-signs-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px; /* Aumenta el padding general */
  font-family: Arial, sans-serif;
  position: relative;
}

.vital-signs-panel, .alerts-panel {
  width: 48%; /* Hace los paneles aún más grandes */
  background-color: #f9f9f9;
  border: 2px solid #ddd; /* Mantén el borde más grueso */
  padding: 50px; /* Aumenta el padding interno */
  border-radius: 12px;
}

.vital-signs-panel h2 {
  text-align: center;
  margin-bottom: 40px; /* Más espacio entre el título y los signos */
  font-size: 32px; /* Fuente más grande */
}

.vital-sign {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px; /* Más espacio entre cada signo */
}

.label {
  font-weight: bold;
  font-size: 28px; /* Aumenta el tamaño de la fuente */
}

.value {
  font-size: 28px; /* Igual que las etiquetas para uniformidad */
  color: #555;
}

.divider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: #000; /* Línea negra */
}

.alerts-panel h3 {
  margin-bottom: 30px;
  font-size: 32px; /* Igual que el título del panel de signos vitales */
}

.alert {
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  font-size: 28px; /* Tamaño uniforme para el texto */
}

.no-alerts {
  background-color: #f8d7da;
  color: red;
  border: 2px solid #f5c6cb; /* Mantén el grosor del borde */
}

.pi {
  font-size: 28px; /* Tamaño del ícono igual que el texto */
  margin-right: 10px; /* Espacio entre el ícono y el texto */
}
</style>