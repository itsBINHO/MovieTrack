<template>
<div class="login-page">
  <transition name="fade-up" appear>
    <v-container class="d-flex align-center justify-center min-h-screen">
      <div class="infoContent">
        <div class="logoBanner">
          <img src="../assets/login/Logo.svg" alt="Logo MovieNest" class="logo">
          <h2 class="title">MovieNest</h2>
        </div>
        <div class="InfoDesc">      
          <h3>Seu espaço para organizar <br/> filmes, séries e animes.</h3>
          <ul>
            <li class="creationIcon">Crie sua lista pessoal <br/> de filmes e séries.</li>
            <li class="fileIcon">Organize o que já assistiu <br/> e o que ainda vai ver</li>
            <li class="starIcon">Acompanhe tudo <br/> em um só lugar</li>
          </ul>
        </div>
      </div>

      <v-card
        class="cardLogin pt-15 pa-10"
        style="background-color: #1a1a1a;"
        rounded="xl">

        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold" style="color: #ffffff;">Login</h1>
        </div>

        <v-form v-model="valid" ref="form">
          <v-text-field
            v-model="email"
            label="Email"
            variant="outlined"
            hide-details
            class="mb-4"
            density="comfortable"
            style="color: white;"
            :rules="[v => !!v || 'Digite seu email']"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Senha"
            type="password"
            variant="outlined"
            hide-details
            class="mb-6"
            density="comfortable"
            style="color: white;"
            :rules="[v => !!v || 'Digite sua senha']"
          ></v-text-field>

          <v-btn
            block
            class="mb-4"
            size="large"
            style="background-color: #FFB533; color: black; font-weight: bold; border-radius: 8px;"
            @click="login"
          >
            Entrar
          </v-btn>
          <p v-if="error" class="text-red text-center mt-2">{{ error }}</p>

          <div class="d-flex justify-space-between" style="color: white; font-size: 0.9rem;">
            <a href="#" style="color: white; text-decoration: none;">Esqueci minha senha</a>
            <router-link 
            to="/Cadastro" 
            style="color: white; text-decoration: none;">
            Criar Conta
          </router-link>
          </div>

          <div class="d-flex align-center my-4">
            <div style="flex:1; height:1px; background-color:#444;"></div>
            <span style="margin:0 12px; color:#aaa; font-size:0.9rem;">Ou</span>
            <div style="flex:1; height:1px; background-color:#444;"></div>
          </div>

          <v-btn
          block
          class="mb-4 mt-10"
          size="large"
          variant="outlined"
          style="border-radius: 8px; border-color: #ffffff; color: #ffffff; font-weight: 500; background-color: #1a1a1a;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" style="margin-right: 8px;">
            <path fill="#4285F4" d="M24 9.5c3.3 0 6.2 1.1 8.6 3.2l6.4-6.4C34.8 2.7 29.7.5 24 .5 14.6.5 6.5 6.5 2.9 14.9l7.9 6.2C12.2 15.3 17.5 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.1 24.5c0-1.5-.1-2.9-.4-4.3H24v8.1h12.5c-.5 2.5-1.9 4.7-3.9 6.1l6 4.7c3.5-3.3 5.5-8.1 5.5-14.6z"/>
            <path fill="#FBBC05" d="M10.8 28.7c-1-2.9-1-6.1 0-8.9l-7.9-6.2c-2.6 5.2-2.6 11.4 0 16.6l7.9-6.2z"/>
            <path fill="#EA4335" d="M24 47.5c5.7 0 10.5-1.9 14-5.1l-6-4.7c-2.1 1.4-4.8 2.2-8 2.2-6.5 0-11.9-5.8-13.2-13.3l-7.9 6.2c3.6 8.4 11.7 14.4 21.1 14.4z"/>
          </svg>
          Entrar com Google
          </v-btn>

        </v-form>
      </v-card>
    </v-container>
  </transition>
</div>
</template>

<script setup>
  import { ref } from 'vue'
  import api from '../services/api.js'
  import { useRouter } from 'vue-router'

  const router = useRouter();

  const email = ref('');
  const password = ref('');
  const error = ref('');
  

  async function login() {
   try {
    const response = await api.post('/auth/login', {
      email: email.value,
      password: password.value
    });
    localStorage.setItem('token', response.data.token);
    router.push('/Dashboard');
   } catch (err) {
    error.value = "Usuário ou senha inválidos.";
   }
  }

</script>

<style>

  html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}

.login-page {
  display: flex;
  min-height: 100vh;
  background-color: black;
}

.v-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
}

.infoContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 450px;
  color: white;
  text-align: left;
}

.logoBanner {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  width: 300px;
  height: auto;
  margin-left: -5rem;
}

.title {
  font-size: 2.5rem;
  margin: 0;
  margin-left: -6rem;
  margin-bottom: 2.5rem;
}

.InfoDesc h3 {
  margin-top: -7rem;
  font-size: 1.8rem;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.3rem;
}

li {
  position: relative;
  padding-left: 2.5rem;
  color: #B3B3B3;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.3rem;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
}

li.creationIcon::before {
  background-image: url('../assets/login/list-icon-films.svg');
}
li.fileIcon::before {
  background-image: url('../assets/login/file-icon.svg');
}
li.starIcon::before {
  background-image: url('../assets/login/yellow-star-icon.svg');
}

.cardLogin {
  width: 100%;
  max-width: 400px;
  background-color: #1a1a1a !important;
}

@media (max-width: 1024px) {
  .v-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .infoContent {
    align-items: center;
    text-align: center;
    max-width: 90%;
  }

  .logoBanner {
    justify-content: center;
  }

  .InfoDesc h3 {
    font-size: 1.2rem;
  }

  ul {
    align-items: center;
    font-size: 1rem;
  }

  li {
    padding-left: 2rem;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 1.8rem;
  }

  .InfoDesc h3 {
    font-size: 1rem;
  }

  .cardLogin {
    padding: 1.5rem !important;
  }

  ul {
    font-size: 0.9rem;
  }
}

.fade-up-enter-active {
  transition: all 1.8s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(80px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.scale-in-enter-active {
  transition: all .8s ease;
}
.scale-in-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.scale-in-enter-to {
  opacity: 1;
  transform: scale(1);
}


</style>