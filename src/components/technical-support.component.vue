
<script>
import ToolbarElderComponent from "./toolbar-elder.component.vue";

export default {
  name: 'TechnicalSupportComponent',
  components: {ToolbarElderComponent},
}
</script>

<template>

  <toolbar-elder-component/>

  <div class="support-page">
    <button class="return-button">← Return</button>

    <h1 class="title">Technical Support</h1>

    <div class="support-container">
      <!-- Frequently Asked Questions Section -->
      <div class="faq-section">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-item">Question 1</div>
        <div class="faq-item">Question 2</div>
        <div class="faq-item">Question 3</div>
        <div class="faq-item">Question 4</div>
      </div>

      <!-- Request Help Section -->
      <div class="help-section">
        <h2 class="section-title">Request Help</h2>
        <div class="help-item">
          <span>Support Number</span>
          <span class="support-number">1234567890</span>
        </div>
        <div class="help-item">
          <span>Send Message</span>
          <textarea class="message-input"></textarea>
        </div>
        <button class="send-button">Send</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.support-page {
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

.support-container {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Añadido espacio entre las columnas */
}

.faq-section, .help-section {
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
}

.faq-item {
  background-color: white;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.help-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
}

.support-number {
  font-weight: bold;
  font-size: 16px;
}

.message-input {
  width: 100%;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  resize: none;
}

.send-button {
  background-color: #20BFC2;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
  display: block;
  width: 100px;
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
}

.send-button:hover {
  background-color: #1A9596;
}
</style>
