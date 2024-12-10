import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import MainMicro from '../components/MainMicro'
import TopMicro from '../components/TopMicro'
import { CSSTransition } from 'react-transition-group';
import '../css/micro.css'

export default function Micro() {
  const esRef = useRef(null);
  const eaRef = useRef(null);
  const mcRef = useRef(null);
  const mpRef = useRef(null);
  const [showMainMicro, setShowMainMicro] = useState(false); 
  const [tartgetSection, setTargetSection] = useState(null);

  const scrollToSection = (section) => {
    if(section == 'es' && esRef.current){
      esRef.current.scrollIntoView({ behavior: 'smooth'});
    }else if(section == 'ea' && eaRef.current){
      eaRef.current.scrollIntoView({ behavior: 'smooth'});
    }else if(section == 'mc' && mcRef.current){
      mcRef.current.scrollIntoView({ behavior: 'smooth'});
    }else if(section == 'mp' && mpRef.current){
      mpRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }

  const handleOpenAndScroll = (section) => {
    if(!showMainMicro){
      setShowMainMicro(true);
      setTargetSection(section);
    }else{
      scrollToSection(section);
    }
  }

  useEffect(()=>{
    if(showMainMicro && tartgetSection) {
      scrollToSection(tartgetSection);
      setTargetSection(null);
    }
  }, [showMainMicro, tartgetSection]);



  return (
    <div>
      <TopMicro 
        scrollToSection={handleOpenAndScroll}
        onToggleMainMicro={() => setShowMainMicro(!showMainMicro)}
        showMainMicro={showMainMicro}
      />
      <CSSTransition
        in={showMainMicro}
        timeout={300}
        classNames="main-micro-transition"
        unmountOnExit
      >
        <MainMicro
          esRef={esRef}
          eaRef={eaRef}
          mcRef={mcRef}
          mpRef={mpRef}
        />
      </CSSTransition>
      <Footer/>
    </div>
  )
}
