import { routes as home } from '../views/home/'
import { routes as auth } from '../modules/auth/'
import { routes as register } from '../modules/register/'

export default [
  ...home,
  ...auth,
  ...register
]
