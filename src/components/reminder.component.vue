
<script>
import ToolbarElderComponent from "./toolbar-elder.component.vue";

export default {
  name: 'RemindersComponent',
  components: {ToolbarElderComponent},
}
</script>


<template>

  <toolbar-elder-component/>

  <div class="reminders-page">
    <button class="return-button">← Return</button>

    <div class="reminders-container">
      <h1 class="title">Reminders</h1>

      <div class="pending-medications">
        <h2 class="section-title">Pending Medications</h2>
        <div class="medication-item">
          <span>Medicine 01</span>
          <span>Take at 12:00</span>
          <button class="status-button">Ready</button>
        </div>
        <div class="medication-item">
          <span>Medicine 01</span>
          <span>Take at 16:00</span>
          <button class="status-button">Ready</button>
        </div>
        <div class="medication-item">
          <span>Medicine 01</span>
          <span>Take at 19:00</span>
          <button class="status-button">Ready</button>
        </div>
        <div class="medication-item">
          <span>Medicine 01</span>
          <span>Take at 22:00</span>
          <button class="status-button">Ready</button>
        </div>
      </div>

      <div class="medications-taken">
        <h2 class="section-title">Medications Taken</h2>
        <div class="medication-item">
          <span>Medicine 03</span>
          <span>Take at 09:00</span>
          <button class="status-button">Earring</button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.reminders-page {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.return-button {
  position: absolute;
  top: 20px;
  left: -600px;
  background-color: #20BFC2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
}

.reminders-container {
  background-color: #f0f0f0;
  border-radius: 12px;
  padding: 30px 250px ;
  margin-top: 60px; /* Para dejar espacio para el botón */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.pending-medications, .medications-taken {
  margin-bottom: 30px;
}

.section-title {
  background-color: #FFDD44;
  color: black;
  padding: 15px 200px; /* Ajusta este padding según necesites */
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  text-align: left; /* Alinea el texto a la izquierda */
}


.medications-taken .section-title {
  background-color: #20BFC2;
  color: white;
}

.medication-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}

.status-button {
  background-color: #20BFC2;
  color: white;
  border: none;
  padding: 7px 15px;
  cursor: pointer;
  border-radius: 6px;
}

.status-button:hover {
  background-color: #1A9596;
}
</style>