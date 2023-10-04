<script setup lang="ts">
import EmployeesComponent from '../components/EmployeesComponent.vue'
</script>

<template>
  <div class="about">
    <EmployeesComponent />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
