import { routes as auth } from '../modules/auth/'
import { routes as register } from '../modules/register/'
import { routes as dashboard } from '../modules/dashboard/'

export default [
  ...auth,
  ...register,
  ...dashboard
]
