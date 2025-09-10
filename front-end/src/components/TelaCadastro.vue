<template>
  <div class="register-page">
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
            @click="register"
          >
            Criar Conta
          </v-btn>

          <div class="text-center" style="color: white; font-size: 0.9rem;">
            Já possui conta?
            <a href="/Login" style="color: #FFB533; text-decoration: none; font-weight: bold;">
              Faça login
            </a>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const username = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")
const valid = ref(false)
const form = ref(null)

const router = useRouter()

function register() {
  if (form.value.validate()) {
    console.log("Usuário registrado:", {
      username: username.value,
      email: email.value,
    })
    router.push("/login")
  }
}
</script>

<style>
.register-page {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: black;
}

.cardRegister {
  width: 30vw;
  min-height: auto;
}
</style>
