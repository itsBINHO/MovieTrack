<template>
  <div class="register-page">
    <transition name="fade-up" appear>
      <v-container class="d-flex align-center justify-center">
        <v-card
          class="cardRegister pa-10"
          style="background-color: #1a1a1a;"
          rounded="xl"
        >
          <div class="text-center mb-6">
            <h1 class="text-3xl font-bold" style="color: #ffffff;">Criar Conta</h1>
          </div>

          <v-form v-model="valid" ref="form">
            <v-text-field
              v-model="username"
              label="Nome de usuário"
              variant="outlined"
              hide-details
              class="mb-4"
              density="comfortable"
              style="color: white;"
              :rules="[v => !!v || 'Digite seu nome de usuário']"
            ></v-text-field>

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
              class="mb-4"
              density="comfortable"
              style="color: white;"
              :rules="[v => !!v || 'Digite sua senha']"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              label="Confirmar senha"
              type="password"
              variant="outlined"
              hide-details
              class="mb-6"
              density="comfortable"
              style="color: white;"
              :rules="[v => v === password || 'As senhas não conferem']"
            ></v-text-field>

            <v-btn
              block
              class="mb-4"
              size="large"
              style="background-color: #FFB533; color: black; font-weight: bold; border-radius: 8px;"
              @click="register">
              Criar Conta
            </v-btn>
            <p v-if="success" class="text-green text-center mt-2">{{ success }}</p>
            <p v-if="error" class="text-red text-center mt-2">{{ error }}</p>

            <div class="text-center" style="color: white; font-size: 0.9rem;">
              Já possui conta?
              <a href="/Login" style="color: #FFB533; text-decoration: none; font-weight: bold;">
                Faça login
              </a>
            </div>
          </v-form>
        </v-card>
      </v-container>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue"
import api from "@/services/api"
import { useRouter } from "vue-router"

const router = useRouter()

const username = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")
const success = ref("");
const error = ref("");

async function register() {
  try {
    await api.post("/auth/register", {
      name: username.value,
      email: email.value,
      password: password.value,
    });
    
    success.value = "Usuário cadastrado com sucesso!";
    setTimeout(() => router.push("/login"), 1500);
  } catch (err) {
    error.value = "Erro ao cadastrar. Tente novamente.";
  }
}
</script>

<style>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: black;
  padding: 2rem;
}

.cardRegister {
  width: 100%;
  max-width: 400px;
  background-color: #1a1a1a !important;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 181, 51, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

@media (max-width: 1024px) {
  .cardRegister {
    max-width: 450px;
    padding: 2rem !important;
  }
}

@media (max-width: 768px) {
  .register-page {
    padding: 1rem;
  }

  .cardRegister {
    width: 90%;
    padding: 1.5rem !important;
  }

  h1 {
    font-size: 1.8rem !important;
  }

  .v-btn {
    font-size: 1rem !important;
  }
}

@media (max-width: 480px) {
  .cardRegister {
    width: 100%;
    border-radius: 16px;
    padding: 1rem !important;
  }

  h1 {
    font-size: 1.5rem !important;
  }

  .v-btn {
    font-size: 0.9rem !important;
  }
}

.fade-up-enter-active {
  transition: all 1s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

</style>
 