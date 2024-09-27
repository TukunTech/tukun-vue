<script>
export default {
  name: 'loginComponent',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form); // Acción cuando el formulario se envía
    }
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <!-- Logo -->
      <div class="logo-tukun">
        <img src="/assets/Logo.png" alt="Logo" />
      </div>

      <h2>Log In</h2>

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
        <router-link class="text-elder" to="/login-elder">Elder</router-link>
        <a class="text-clinics">Clinics</a>
      </div>

      <!-- Botones de login social -->
      <div class="social-login">
        <button class="google-login">
          <img src="/assets/google-icon.png" alt="google" />
        </button>
        <button class="apple-login">
          <img src="/assets/apple-icon.png" alt="apple" />
        </button>
        <button class="facebook-login">
          <img src="/assets/facebook-icon.png" alt="facebook" />
        </button>
      </div>

      <!-- Formulario de login -->
      <form @submit.prevent="onSubmit">
        <div class="form-field">
          <label for="email">Email</label>
          <input id="email"/>
        </div>

        <div class="form-field">
          <label for="password">Password</label>
          <input
              id="password"
              type="password"
          />
        </div>

        <div class="boto">
          <router-link to="/home" >
            <button type="submit" class="boto">Log In</button>
          </router-link>
        </div>
      </form>

      <!-- Forgot password -->
      <div class="i-forgot-my-pass">
        <a href="/home">I forgot my password</a>
      </div>

      <!-- Create account -->
      <div class="create-account">
        <span>Don't have an account? Create one</span>
        <router-link to="/create">
          <button class="button-create-account">Create an account</button>
        </router-link>
      </div>
    </div>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');

/* Contenedor de la página de login */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Asegura que ocupe toda la pantalla */
  background-image: url('/assets/clinic-background.png');; /* Imagen de fondo */
  background-size: cover;
  background-position: center;
}

/* Caja de login */
.login-box {
  width: 28%;
  height: 1000%;
  //max-width: 90%;
  padding: 2rem;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Estilo del logo */
.logo-tukun img {
  width: 90px;
  margin-bottom: 1rem;
}

/* Título */
h2 {
  color: #000;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.2rem;
}

/* Tipo de cuenta (Switch) */
.tipe-account {
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 40px;
  background: #d3eff3;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.rectangle {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 50%;
}

.text-elder, .text-clinics {
  position: absolute;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  font-family: 'Quicksand', sans-serif;
}

.text-elder {
  top: 25%;
  left: 20%;
  color: #5cb4b5;
}

.text-clinics {
  top: 25%;
  left: 70%;
  color: #d3eff3;
}

/* Botones sociales */
.social-login {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
  border: none;
}

.google-login img, .apple-login img, .facebook-login img {
  width: 35px;
  height: 35px;

}

/* Campos del formulario */
.form-field {
  width:700px;
  max-width: 460px;
  margin-bottom: 1rem;
  height: 60px;
  flex-shrink: 0;
  font-family: 'Quicksand', sans-serif;

}

.form-field input{
  background: #F0F0F0;
  padding: 10px; /* Espacio interno */
  border: 1px solid #ccc; /* Color y estilo del borde */
  border-radius: 5px; /* Bordes redondeados */
  width: 100%; /* Ocupa el 100% del contenedor */
  box-sizing: border-box; /* Asegura que el padding y el borde se incluyan en el ancho total */
  font-size: 16px; /* Tamaño de la fuente */
}


.boto{
  margin-left: 1rem;
  width: 400px;
  height: 45px;
}

.boto button {
  display: inline-block;
  padding: -2rem 1rem;
  background-color: #0097B2;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  font-size: 1rem;
  text-align: center;
  border:none;
  font-family: 'Quicksand', sans-serif;
}

.boto button:hover {
  background-color: #d3eff3;
  color: #0097b2;
}

/* Enlace "Olvidé mi contraseña" */
.i-forgot-my-pass {
  margin-top: 1rem;
  font-family: 'Quicksand', sans-serif;

}

.i-forgot-my-pass a {
  color: #000;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

.i-forgot-my-pass a:hover {
  text-decoration: underline;
}

/* Sección para crear cuenta */
.create-account {
  text-align: center;
  margin-top: 2rem;
  font-family: 'Quicksand', sans-serif;

}

.create-account span {
  display: block;
  margin-bottom: 1rem;
}

.button-create-account {
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

.button-create-account:hover {
  background-color: #d3eff3;
  color: #0097b2;
}

/* Responsivo para pantallas pequeñas */
@media (max-width: 768px) {
  .login-box {
    padding: 1.5rem;
    width: 90%;
  }

  .logo-tukun img {
    width: 60px;
  }

  .social-login {
    gap: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .text-elder, .text-clinics {
    font-size: 14px;
  }
}
</style>
