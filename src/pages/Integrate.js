import React, { useRef, useState } from 'react'
import FooterIntegrate from '../components/FooterIntegrate'
import MainIntegrate from '../components/MainIntegrate'
import TopIntegrate from '../components/TopIntegrate'

export default function Integrate() {
  
  const bigloneRef = useRef(null);
  const saitdolRef = useRef(null);
  const onlineRef = useRef(null);
  const [showMainIntegrate, setShowMainIntegrate] = useState(false);

  const OpenMainIntegrate = () =>{
    setShowMainIntegrate(!showMainIntegrate);
  }

  const scrollToSection = (section) =>{
    if(section === 'biglone' && bigloneRef.current) {
      bigloneRef.current.scrollIntoView({behavior: 'smooth'});
    } else if (section === 'saitdol' && saitdolRef.current) {
      saitdolRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'online' && onlineRef.current) {
      onlineRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <TopIntegrate scrollToSection={scrollToSection} onToggleMainIntegrate={OpenMainIntegrate}/>
      {showMainIntegrate && <MainIntegrate
        bigloneRef={bigloneRef}
        saitdolRef={saitdolRef}
        onlineRef={onlineRef}
      />}
      <FooterIntegrate/>
    </div>
  )
}
