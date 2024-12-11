import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import '../css/footer.css'
import '../css/mainguarantee.css'
import MainGuarantee from '../components/MainGuarantee'
import TopGuarantee from '../components/TopGuarantee'
import '../css/guarantee.css'
import { CSSTransition } from 'react-transition-group'
import { useNavigate} from 'react-router-dom'


export default function Guarantee() {


  const saitdolRef = useRef(null);
  const loanRef = useRef(null);
  const [showMainGuarantee, setShowMainGuarantee] = useState(false);
  const [tartgetSection, setTargetSection] = useState(null);
  const navigate = useNavigate();

  const scrollToSection = (section) => {
    if(section == 'saitdol' && saitdolRef.current){
      saitdolRef.current.scrollIntoView({ behavior: 'smooth'});
    }else if(section == 'loan' && loanRef.current){
      loanRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }

  const handleOpenAndScroll = (section) => {
    if(!showMainGuarantee){
      setShowMainGuarantee(true);
      setTargetSection(section);
    }else{
      scrollToSection(section);
    }
  }

  useEffect(()=>{
    if(showMainGuarantee && tartgetSection) {
      scrollToSection(tartgetSection);
      setTargetSection(null);
    }
  }, [showMainGuarantee, tartgetSection]);


  return (
    <div>
      <TopGuarantee 
      scrollToSection={handleOpenAndScroll}
      onToggleMainGuarantee={() =>setShowMainGuarantee(!showMainGuarantee)}
      showMainGuarantee={showMainGuarantee}
      />
      <CSSTransition
        in={showMainGuarantee}
        timeout={300}
        classNames="main-guarantee-transition"
        unmountOnExit
      >
        <MainGuarantee
          saitdolRef={saitdolRef}
          loanRef={loanRef}
        />
      </CSSTransition>
      <Footer/>
    </div>
  )
}
