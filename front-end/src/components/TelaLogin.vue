<template>
<div class="login-page">
  <v-container class="d-flex align-center justify-center min-h-screen">
    <div class="infoContent">
      <div class="logoBanner">
        <img src="../assets/Logo.svg" alt="Logo MovieNest" class="logo">
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
          v-model="username"
          label="Usuário ou Email"
          variant="outlined"
          hide-details
          class="mb-4"
          density="comfortable"
          style="color: white;"
          :rules="[v => !!v || 'Digite seu usuário ou email']"
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
</div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const username = ref('')
  const password = ref('')
  const router = useRouter()

  function login() {
    if (username.value && password.value) {
      router.push('/dashboard')
    } else {
      alert('Preencha usuário e senha!')
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
}

.login-page {
  display: flex;
  min-height: 100vh;
  background-color: black;
}


  .infoContent {
    margin-left: -23vw ;
    padding-right: 10vw;
  }

  .logoBanner {
    display: flex;
    margin-left: -10vw;
  }
  .title {
    margin-top: 8vw;
    margin-left: -7vw;
    font-size: 4vw;
    font-family: 'Montserrat';
    color: white;
  }

  .InfoDesc {
    display: flex;
    flex-direction: column;
  }

  .InfoDesc h3 {
    margin-top: -12vw;
    font-size: 2.3vw;
    font-family: 'Courier New', Courier, monospace;
    color: white;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 2vw;
    margin-left: 12vw;
    gap: 2vw;
    font-size: 1.4vw;
    margin-bottom: 8vw;
  }

  li {
    color: #B3B3B3;
  }

  .cardLogin {
    width: 30vw;
    height: 30vw;
    margin-right: -20vw;
  }

  li {
  position: relative;
  padding-left: 28px;
  color: #B3B3B3;
}

li::before {
  content: "";
  position: absolute;
  left: -3vw;
  top: 1vw;
  width: 50px;
  height: 50px;
  background-size: contain;
}

li.creationIcon::before {
  background: url('../assets/list-icon-films.svg') no-repeat center center;
}
li.fileIcon::before {
  background: url('../assets/file-icon.svg') no-repeat center center;
}
li.starIcon::before {
  background: url('../assets/yellow-star-icon.svg') no-repeat center center;
}

</style>