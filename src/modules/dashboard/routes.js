export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: 'dashboard' */ './pages/Dashboard')
  },
  {
    name: 'dashboardMovies',
    path: '/dashboardmovies',
    component: () => import(/* webpackChunkName: "movies" */'./pages/DashboardMovies')
  },
  {
    path: '/watched',
    name: 'watched',
    component: () => import(/* webpackChunkName: 'dashboard' */ './pages/Watched')
  },
  {
    path: '/towatch',
    name: 'towatch',
    component: () => import(/* webpackChunkName: 'dashboard' */ './pages/ToWatch')
  }
]
