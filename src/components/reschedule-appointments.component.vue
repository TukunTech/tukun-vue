<script>
import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default{
  name: 'RescheduleAppointmentsComponent',
  components: {ToolbarClinicComponent},
}



</script>

<template>
  <toolbar-clinic-component/>


  <divider class="container">
    <router-link to="/appointments" class="btn-return" >Return
    </router-link>

    <h1>Reschedule Appointments</h1>

    <div class="box-info">
      <label>DNI Patient:</label>
      <input v-model="dni" class="DNI-patient-input" type="text">
      <router-link to="/update" class="btn-search" >Search</router-link>
    </div>
  </divider>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  align-items: center;
}


h1 {
  text-align: center;
  margin-top: 3%;
  color: #000;
  font-family: Quicksand;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 41.667% */

}

.box-info {
  border-radius: 30px;
  background: #D9D9D9;
  width: 25%;
  padding: 3%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.box-info label {
  color: #000;
  font-family: Quicksand;
  font-size: 130%;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 85.714% */
  padding: 10px;
}

.btn-search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #54AFB2;
  color: #fff;
  font-family: Quicksand;
  font-size: 18px;
  border-radius: 25px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  text-decoration: none;


}

.btn-search:hover {
  background-color: #479a9b;
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
  background-color: #007a91;
}


</style>