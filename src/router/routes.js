import { routes as auth } from '../modules/auth/'
import { routes as register } from '../modules/register/'

export default [
  ...auth,
  ...register
]
