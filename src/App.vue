<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <v-app>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <NavComponent />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped lang="scss"></style>
