<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginView from './views/LoginView.vue';


</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/register">Rejestracja</RouterLink>
    <RouterLink to="/login">Logowanie</RouterLink>
    <RouterLink to="/dynComponents">Dynamiczne komponenty</RouterLink>
    <RouterLink to="/clicker">Klikacz</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
</style>
