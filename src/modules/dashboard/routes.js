export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: 'dashboard' */ './pages/Dashboard')
  },
  {
    path: '/watched',
    name: 'watched',
    component: () => import(/* webpackChunkName: 'dashboard' */ './pages/Watched')
  },
  {
    name: 'dashboardMovies',
    path: '/dashboardmovies',
    component: () => import(/* webpackChunkName: "movies" */'./pages/DashboardMovies')
  }
]
