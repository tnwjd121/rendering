import React, { useEffect, useRef, useState } from 'react'
import FooterIntegrate from '../components/FooterIntegrate'
import MainIntegrate from '../components/MainIntegrate'
import TopIntegrate from '../components/TopIntegrate'

export default function Integrate() {
  
  const bigloneRef = useRef(null);
  const saitdolRef = useRef(null);
  const onlineRef = useRef(null);
  const [showMainIntegrate, setShowMainIntegrate] = useState(false);
  const [targetSection, setTargetSection] = useState(null);


  const scrollToSection = (section) =>{
    if(section === 'biglone' && bigloneRef.current) {
      bigloneRef.current.scrollIntoView({behavior: 'smooth'});
    } else if (section === 'saitdol' && saitdolRef.current) {
      saitdolRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'online' && onlineRef.current) {
      onlineRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAndScroll = (section) => {
    if (!showMainIntegrate) {
      // "자세히 보기"가 닫혀있을 경우 열기
      setShowMainIntegrate(true);
      setTargetSection(section);
    } else {
      // "자세히 보기"가 열려있을 경우 바로 이동
      scrollToSection(section);
    }
  };

  // showMainIntegrate, targetSection 변경되면 바로 실행
  useEffect(() => {
    if (showMainIntegrate && targetSection) {
      scrollToSection(targetSection);
      // 초기화
      setTargetSection(null);
    }
  }, [showMainIntegrate, targetSection]);
  

  return (
    <div>
      <TopIntegrate 
        scrollToSection={handleOpenAndScroll} 
        onToggleMainIntegrate={() => setShowMainIntegrate(!showMainIntegrate)} 
        showMainIntegrate={showMainIntegrate}
      />
      {showMainIntegrate && <MainIntegrate
        bigloneRef={bigloneRef}
        saitdolRef={saitdolRef}
        onlineRef={onlineRef}
      />}
      <FooterIntegrate/>
    </div>
  )
}
