import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Profile from './profile.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Profile />
  </StrictMode>,
)
