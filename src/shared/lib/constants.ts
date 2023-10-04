export const ROOT = '/'
export const EMPLOYEES = '/employees'
export const MANAGE = '/manage'
export const PROJECTS = '/projects'
export const CLIENTS = '/clients'
export const ROLES = '/roles'

export const navItems = [
  {
    path: ROOT,
    name: 'Проекты'
  },
  {
    path: EMPLOYEES,
    name: 'Люди'
  },
  {
    path: MANAGE,
    name: 'Управление',
    children: [
      {
        path: `${MANAGE}${ROLES}`,
        name: 'Роли'
      },
      {
        path: `${MANAGE}${EMPLOYEES}`,
        name: 'Люди'
      },
      {
        path: `${MANAGE}${CLIENTS}`,
        name: 'Клиенты'
      },
      {
        path: `${MANAGE}${PROJECTS}`,
        name: 'Проекты'
      }
    ]
  }
]
