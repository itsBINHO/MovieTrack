<template>
  <v-container>
    <v-card class="pa-6">
      <v-card-title class="text-h5">Seja muito bem vindo(a) ao MovieNest 🎬</v-card-title>
      <v-card-text>
        <p>Aqui você vai organizar os filmes, séries e animes com sua namorada 💕</p>
        <v-btn color="primary" class="mt-4" @click="irParaPesquisa">
          Ir para Pesquisa
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToSearch() {
  alert('Na próxima etapa vamos criar a tela de pesquisa 😉')
}
</script>