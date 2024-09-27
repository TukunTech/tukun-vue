<script>

import ToolbarClinicComponent from "./toolbar-clinic.component.vue";

export default {

  name: 'createComponent',
  components: {ToolbarClinicComponent},

  data() {
    return {
      formData: {
        name: '',
        ruc: '',
        email: '',
        number: '',
        city: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('Form Submitted', this.formData);
    },
    navigateToHome() {
      this.$router.push('/home');
    },
    navigateToLogin() {
      this.$router.push('/login');
    },

  },

};

</script>

<template>
  <toolbar-clinic-component/>

  <div class="create-container">
    <!-- Contenedor blanco -->
    <div class="create-box">
      <div class="logo-tukun">
        <img src="/assets/Logo.png" alt="logo" />
      </div>

      <!-- Título -->
      <h2>Create an account</h2>

      <!-- Tipo de cuenta Switch -->
      <div class="tipe-account">
        <div class="rectangle">
          <svg
              width="250"
              height="40"
              viewBox="0 0 250 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="250" height="40" rx="10" fill="#5CB4B5" />
          </svg>
        </div>
        <router-link class="text-elder" to="/create-elder">Elder</router-link>
        <a class="text-clinics">Clinics</a>
      </div>

      <form @submit.prevent="onSubmit">
        <div class="form-field">
          <label for="company-name">Company Name</label>
          <input v-model="formData.name" id="company-name" placeholder="Company Name" />
        </div>

        <div class="form-field">
          <label for="ruc">RUC</label>
          <input v-model="formData.ruc" id="ruc" placeholder="RUC" />
        </div>

        <div class="form-field">
          <label for="email">Email</label>
          <input v-model="formData.email" id="email" placeholder="Company Email" />
        </div>

        <div class="form-field">
          <label for="number">Phone Number</label>
          <input v-model="formData.number" id="number" placeholder="Company Phone Number" />
        </div>

        <div class="form-field">
          <label for="city">City</label>
          <input v-model="formData.city" id="city" placeholder="City" />
        </div>

        <div class="form-field">
          <label for="password">Password</label>
          <input
              v-model="formData.password"
              id="password"
              type="password"
              placeholder="Password"
          />
        </div>

        <!-- Botón create-->
        <div class="button-create">
          <button class="button-create" @click="navigateToHome">Create</button>
        </div>
      </form>

      <!-- Texto y botón already account -->
      <div class="login-account">
        <span >Already have an account?</span>
        <router-link to="/login">
          <button class="button-login-account">Log in to your account</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');

/* Contenedor principal */
.create-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('/assets/clinic-background-2.png');
  background-size: cover;
  background-position: center;
  padding: 20px;
}

/* Caja principal que se ajusta */
.create-box {
  width: 45vw;
  max-width: 570px;
  min-width: 300px;
  padding: 2rem;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
}

/* Logo responsivo */
.logo-tukun img {
  width: 15vw;
  max-width: 150px;
  height: auto;
  margin-top: -0.5rem;
  margin-left: 13rem;
}

/* Título */
h2 {
  color: #000;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2px;
}

/* Campo de formulario */
.form-field {
  width: 90%;
  max-width: 460px;
  margin: 1rem auto;
  border-radius: 25px;
  display: block;
  font-size: 1rem;
}

.form-field label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Quicksand', sans-serif;
}

.form-field input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Botón de creación */
.button-create {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
}

.button-create button {
  background-color: #0097b2;
  color: white;
  border-radius: 25px;
  width: 60%;
  max-width: 250px;
  height: 2.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  padding: 0.7rem 0;
}

.button-create button:hover {
  background-color: #d3eff3;
  color: #0097b2;
}

/* Tipo de cuenta Switch */
.tipe-account {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 40px;
  background: #d3eff3;
  border-radius: 10px;
  margin-left: 5%;
  margin-bottom: 3%;
  font-family: 'Quicksand', sans-serif;

}

.rectangle {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 50%;
}

.text-elder,
.text-clinics {
  position: absolute;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
}

.text-elder {
  top: 25%;
  left: 21%;
  color: #5cb4b5;
}

.text-clinics {
  top: 25%;
  left: 70%;
  color: #d3eff3;
}

/* Estilo de login */

.login-account {
  text-align: center;
  margin-top: 0.5rem;
  font-family: 'Quicksand', sans-serif;

}

.login-account span {
  display: block;
  margin-bottom: 1rem;
}


.button-login-account {
  background-color: #5cb4b5;
  color: white;
  border-radius: 25px;
  width: 100%;
  max-width: 460px;
  display: inline-block;
  text-align: center;
  padding: 0.5rem 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  border: none;
}

.button-login-account:hover {
  background-color: #d3eff3;
  color: #0097b2;
}

/* Media queries para pantallas medianas */
@media (max-width: 768px) {
  .create-box {
    width: 70vw;
  }

  .logo-tukun img {
    width: 20vw;
    max-width: 100px;
  }

  h2 {
    font-size: 1.8rem;
  }


  .create-account span {
    display: block;
    margin-bottom: 1rem;
  }


  .button-login-account button{
    width: 100%;
    max-width: 400px;
    display: flex;
    margin-top: 1rem;
    background-color: #5cb4b5;
    color: white;
    border-radius: 25px;
    height: 2.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    margin-left: 5rem;
  }
}

/* Media queries para pantallas pequeñas (móviles) */
@media (max-width: 480px) {
  .create-box {
    width: 85vw;
  }

  .logo-tukun img {
    width: 25vw;
    max-width: 80px;
  }

  h2 {
    font-size: 1.5rem;
  }

  .button-create button,
  .login-account button {
    height: 2rem;
    font-size: 0.8rem;
  }

  .text-elder,
  .text-clinics {
    font-size: 0.9rem;
  }

  .form-field {
    font-size: 0.85rem;
  }
}

</style>