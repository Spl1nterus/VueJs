import { defineStore } from 'pinia'
import type { Employee } from '../shared/interfases'
import { getEmployees } from '@/shared/api'

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
        this.employees = getEmployees()
      } catch (e) {
        console.log('ERROR: getJobFieldSettingsListAsync', e)
      } finally {
        this.loading = false
      }
    }
  }
})
