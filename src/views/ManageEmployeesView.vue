<script setup lang="ts">
import { useGetEmployees } from '@/shared/hooks'
import { PlusCircleFilled } from '@ant-design/icons-vue'
const { employees } = useGetEmployees()
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Role', dataIndex: 'role', key: 'role' }
]
</script>

<template>
  <div class="wrap">
    <a-typography-title style="margin: 0" :level="4">Сотрудники</a-typography-title>
    <a-button type="primary">
      <template #icon>
        <PlusCircleFilled />
      </template>
      Новый сотрудник
    </a-button>
  </div>
  <a-table :dataSource="employees" :columns="columns" />
</template>

<style scoped lang="scss">
.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
</style>
