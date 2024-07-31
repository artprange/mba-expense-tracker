import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://mba-expense-tracker.vercel.app/',
})
