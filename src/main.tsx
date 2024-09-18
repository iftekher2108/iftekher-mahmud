import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/custom-boot/custom-bootstrap.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import './assets/plugins/animate/animate.min.css'
import 'bootstrap'

import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init({
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  offset: 120,
  delay: 300,
  duration: 700,
  easing: 'ease',
  mirror: false,
  once: true
});




import App from './App.tsx'

const root = document.getElementById('root')
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
