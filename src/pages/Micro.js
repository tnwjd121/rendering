import React, { useState } from 'react'
import Footer from '../components/Footer'
import MainMicro from '../components/MainMicro'
import TopMicro from '../components/TopMicro'
import { CSSTransition } from 'react-transition-group';
import '../css/micro.css'

export default function Micro() {
  const [showMainMicro, setShowMainMicro] = useState(false); 
  const OpenMainMicro = () =>{
    setShowMainMicro(!showMainMicro);
  }

  return (
    <div>
      <TopMicro 
        onToggleMainMicro={OpenMainMicro}
        showMainMicro={showMainMicro}
      />
      <CSSTransition
        in={showMainMicro}
        timeout={300}
        classNames="main-micro-transition"
        unmountOnExit
      >
        <MainMicro/>
      </CSSTransition>
      <Footer/>
    </div>
  )
}
