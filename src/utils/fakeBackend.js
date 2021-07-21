const users = [
  { name: 'user', password: 'user', role: 'member' },
  { name: 'floorstaff', password: 'floorstaff', role: 'floorstaff' },
  { name: 'teamleader', password: 'teamleader', role: 'teamleader' },
  { name: 'admin', password: 'admin', role: 'admin' }
]

export const authentication = (name, password) => {
  const user = users.find(u => u.name === name && u.password === password)
  let authentication

  if (user) {
    if (user.role === 'member') {
      authentication = 'member'
    } else if (user.role === 'floorstaff') {
      authentication = 'floorstaff'
    } else if (user.role === 'teamleader') {
      authentication = 'teamleader'
    } else if (user.role === 'admin') {
      authentication = 'admin'
    }
  } else {
    authentication = null
  }

  return authentication
}
