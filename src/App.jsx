// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import KnowMore from './components/KnowMore'
import Carousal from './components/Carousal'
import HandCrafted from './components/HandCrafted'
import Reccomendations from './components/Reccomendations'
import LearnMore from './components/LearnMore'

function App() {
  return (
    <div>
      <Header/>
      <KnowMore/>
      <Carousal/>
      <HandCrafted/>
      <Reccomendations/>
      <LearnMore/>
      <Footer/>
    </div>
  )
}

export default App