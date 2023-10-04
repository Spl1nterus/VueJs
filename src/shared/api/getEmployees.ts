import { employees } from '@/shared/mocks/employees'
import type { Employee } from '../interfases'

export const getEmployees = (): Employee[] => {
  return employees
}
