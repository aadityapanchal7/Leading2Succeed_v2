import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hero />
    <About />
  </React.StrictMode>,
)
