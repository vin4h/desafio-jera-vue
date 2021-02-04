export default async (to, from, next) => {
  if (to.name !== 'login' && to.name !== 'register' && !localStorage.getItem('token')) {
    try {
      next({ name: 'login' })
    } catch (err) {
      next({ name: 'login' })
    }
  } else {
    if ((to.name === 'login' || to.name === 'register') && localStorage.getItem('token')) {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  }
}
