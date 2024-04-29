import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Trainers from './components/Trainers.jsx'
import Product from './components/Product.jsx'
import Pricing from './components/Pricing.jsx'
import { Footer } from './components/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero/>
    <Features/>
    <Trainers/>
    <Product/>
    <Pricing/>
    <Footer/>
  </React.StrictMode>,
)
