<script>
import ToolbarElderComponent from "./toolbar-elder.component.vue";

export default {
  name: 'EmergencyNumbersComponent',
  components: {ToolbarElderComponent},
}
</script>

<template>

  <toolbar-elder-component/>

  <div class="emergency-numbers-page">
    <button class="return-button">← Return</button>

    <h1 class="title">Emergency Numbers</h1>

    <div class="numbers-container">
      <!-- Family Contact Section -->
      <div class="family-contact-section">
        <h2 class="section-title">Family Contact</h2>
        <div class="contact-item">
          <span>Son Carlos</span>
          <span>123456789</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        <div class="contact-item">
          <span>Daughter María</span>
          <span>123456789</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        <div class="contact-item">
          <span>grandson Miguel</span>
          <span>123456789</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        <div class="contact-item">
          <span>123456789</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        <button class="add-button">Add contact</button>
      </div>

      <!-- Emergency Numbers Section -->
      <div class="emergency-number-section">
        <h2 class="section-title">Emergency Number</h2>
        <div class="contact-item">
          <span>Hospital</span>
          <span>123456789</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        <div class="contact-item">
          <span>Ambulance</span>
          <span>123456789</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        <div class="contact-item">
          <span>Police</span>
          <span>123456789</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        <div class="contact-item">
          <span>Private Physician</span>
          <span>123456789</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
        <button class="add-button">Add number</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emergency-numbers-page {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  position: relative;
}

.return-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #20BFC2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

.numbers-container {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Espacio entre las columnas */
}

.family-contact-section, .emergency-number-section {
  background-color: #f0f0f0;
  border-radius: 12px;
  padding: 20px;
  width: 48%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  background-color: #20BFC2;
  color: white;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 15px;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.edit-button, .delete-button {
  background-color: #20BFC2;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 8px;
}

.add-button {
  background-color: #20BFC2;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
  display: block;
  width: 150px;
  margin: 20px auto 0;
  font-size: 16px;
  text-align: center;
}

.add-button:hover {
  background-color: #1A9596;
}

.edit-button:hover, .delete-button:hover {
  background-color: #1A9596;
}
</style>