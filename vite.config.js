import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/expense-tracker/', // Replace 'expense-tracker' with your repository name
  plugins: [react()],
})
