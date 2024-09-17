import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css';

import './assets/custom-boot/custom-bootstrap.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import './assets/plugins/animate/animate.min.css'
import 'aos/dist/aos.css'

import './assets/bootstrap/js/bootstrap.bundle.min'

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

// import particlesJS from './assets/plugins/particles/particles'

// particlesJS.load('particles', './particles.json', function () {
//   // console.log('callback - particles.js config loaded');
// });



import { RouterProvider } from "react-router";
import router from './router.tsx'

const root = document.getElementById('root')
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
