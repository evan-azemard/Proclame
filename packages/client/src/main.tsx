import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/_base.scss'
import { ExemplePage } from '@pages/ExemplePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ExemplePage />
  </StrictMode>,
)
