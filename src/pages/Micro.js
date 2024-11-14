import React, { useState } from 'react'
import Footer from '../components/Footer'
import MainMicro from '../components/MainMicro'
import TopMicro from '../components/TopMicro'

export default function Micro() {
  const [showMainMicro, setShowMainMicro] = useState(false); 
  const OpenMainMicro = () =>{
    setShowMainMicro(!showMainMicro);
  }

  return (
    <div>
      <TopMicro onToggleMainMicro={OpenMainMicro}/>
      {showMainMicro && <MainMicro/>}
      <Footer/>
    </div>
  )
}
