import store from '../store'

export default async (to, from, next) => {
  if (to.name !== 'login' && to.name !== 'register' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/ActionCheckToken')
      next({ name: 'login' })
    } catch (err) {
      next({ name: 'login' })
    }
  } else {
    if ((to.name === 'login' || to.name === 'register') && store.getters['auth/hasToken']) {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  }
}
