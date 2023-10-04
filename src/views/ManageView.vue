<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { MANAGE } from '@/shared/lib/constants'

const route = useRoute()
const isManageRoute = ref(route.path === MANAGE)

watch(
  () => route.path,
  (path) => {
    isManageRoute.value = path === MANAGE
  }
)
</script>

<template>
  <div v-if="isManageRoute">ManageView</div>
  <router-view></router-view>
</template>
