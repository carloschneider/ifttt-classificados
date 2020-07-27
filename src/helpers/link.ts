import { baseURL } from '../services/ufsc'

export const buildLink = (path: string | undefined) => `${baseURL}/${path}`
