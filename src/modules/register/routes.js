export default [
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: 'register' */ './pages/Register')
  }
]
