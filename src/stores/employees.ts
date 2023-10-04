import { defineStore } from 'pinia'
import { employees } from '../shared/mocks/employees'
import type { Employee } from '../shared/interfases/Employee'

export const useEmployeesStore = defineStore('employees', {
  state: () => {
    return {
      employees: [] as Employee[],
      loading: false
    }
  },

  actions: {
    async fetchEmployeesAsync() {
      this.loading = true
      try {
        this.employees = employees
      } catch (e) {
        console.log('ERROR: getJobFieldSettingsListAsync', e)
      } finally {
        this.loading = false
      }
    }
  }
})
