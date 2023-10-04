<script setup lang="ts">
import { useGetEmployees } from '@/shared/hooks/useGetEmployees'

const { employees } = useGetEmployees()
</script>

<template>
  <div class="wrap">
    <a-typography-title :level="3">Сотрудники</a-typography-title>
  </div>
  <template v-for="employee in employees" :key="employee.id">
    <span>{{ employee.name }}</span>
  </template>
</template>
