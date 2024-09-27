<script>
export default {
  name: 'toolbar-clinic-component',
  title: 'TukunTech',
  data(){
    return {
      items: [
        { label: 'Home', to: '/home' },
        { label: 'Postoperative Patients', to: '/postoperative'},
        { label: 'Icu', to: '/icu'},
        { label: 'Registration', to: '/registration'},
        { label: 'Patients', to: '/patients'},
        { label: 'Doctors', to: '/doctors'},
        { label: 'Appointments', to: '/appointments' },
      ]
    };
  },

};
</script>
<div></div>
<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="header">
      <template #start>
        <div class="p-d-flex p-jc-between p-ai-center">
          <img src="/assets/Logo.png" alt="Logo" class="logo" />
          <nav class="options p-d-flex p-jc-end">
            <router-link to="/postoperative" class="nav-link">PostPatients</router-link>
            <router-link to="/icu" class="nav-link">ICU Patients</router-link>
            <router-link to="/registration" class="nav-link">Registration</router-link>
            <router-link to="/patients" class="nav-link">Patients</router-link>
            <router-link to="/doctors" class="nav-link">Doctors</router-link>
            <router-link to="/appointments" class="nav-link">Appointments</router-link>
            <router-link to="/home" class="home-icon p-ml-3">
              <pv-button icon="pi pi-home" class="p-button-text"></pv-button>
            </router-link>
          </nav>
        </div>
      </template>
    </pv-toolbar>
  </header>

  <main class="main-content">
    <router-view />
  </main>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');

body {
  font-family: 'Quicksand', sans-serif;
}

.logo {
  height: 3em;
  margin-right: 10px;
}

.header {
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 99vw;
  z-index: 1000;
}

.options {
  display: flex;
  justify-content: flex-end;
}

.nav-link {
  font-size: 1.1rem;
  text-align: center;
  color: #003049;
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 500;
  position: relative;
  font-family: 'Quicksand', sans-serif;

}

.nav-link:hover {
  color: #1E90FF;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: #1E90FF;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover::after {
  visibility: visible;
  width: 100%;
}

.p-button-text {
  font-size: 1.1rem;
  color: #1E90FF;
  background: none;
  border: none;
}

.home-icon {
  background-color: transparent;
  border: none;
  color: #1E90FF;
}

.p-d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.p-ml-3 {
  margin-left: 1rem;
}

.main-content {
  padding-top: 30px;
}

</style>