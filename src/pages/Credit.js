import React, { useEffect, useRef, useState } from 'react'
import MainCredit from '../components/MainCredit'
import Footer from '../components/Footer'
import TopCredit from '../components/TopCredit'
import { CSSTransition } from 'react-transition-group';
import '../css/credit.css'

export default function Credit() {
  const bigloneRef = useRef(null);
  const [showMainCredit, setShowMainCredit] = useState(false);
  const [tartgetSection, setTargetSection] = useState(null);

  const scrollToSection = (section) => {
    if(section == 'biglone' && bigloneRef.current){
      bigloneRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }

  const handleOpenAndScroll = (section) => {
    if(!showMainCredit){
      setShowMainCredit(true);
      setTargetSection(section);
    }else{
      scrollToSection(section);
    }
  }

  useEffect(()=>{
    if(showMainCredit && tartgetSection) {
      scrollToSection(tartgetSection);
      setTargetSection(null);
    }
  }, [showMainCredit, tartgetSection]);

  return (
    <div>
      <TopCredit 
        scrollToSection={handleOpenAndScroll}
        onToggleMainCredit={() =>setShowMainCredit(!showMainCredit)}
        showMainCredit={showMainCredit}
      />
      <CSSTransition
        in={showMainCredit}
        timeout={300} // 애니메이션 지속 시간
        classNames="main-credit-transition"
        unmountOnExit
      >
        <MainCredit
          bigloneRef={bigloneRef}
        />
      </CSSTransition>
      <Footer/>
    </div>
  )
}
