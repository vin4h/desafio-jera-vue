import { setBearerToken } from '@/http'

export const setHeaderToken = token => setBearerToken(token)
export const deleteLocalToken = () => localStorage.removeItem('token')
export const setIdProfile = profileId => localStorage.setItem('profile_id', profileId)
