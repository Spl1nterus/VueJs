import { useEmployeesStore } from '@/stores/employees'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

export const useGetEmployees = () => {
  //get store employees
  const employeesStore = useEmployeesStore()
  const { employees } = storeToRefs(employeesStore)

  onMounted(() => {
    if (employees.value.length > 0) return
    employeesStore.fetchEmployeesAsync()
  })
  return { employees }
}
