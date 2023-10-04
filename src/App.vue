<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <v-app>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <NavComponent />
    <v-main>
      <a-layout-content class="page_wrap">
        <RouterView />
      </a-layout-content>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.page_wrap {
  padding: 12px;
}
</style>
