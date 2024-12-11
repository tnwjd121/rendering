import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import '../css/footer.css'
import '../css/mainguarantee.css'
import MainGuarantee from '../components/MainGuarantee'
import TopGuarantee from '../components/TopGuarantee'
import '../css/guarantee.css'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'


export default function Guarantee() {
  const saitdolRef = useRef(null);
  const loanRef = useRef(null);
  const [showMainGuarantee, setShowMainGuarantee] = useState(false);
  const [tartgetSection, setTargetSection] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    // 파라미터 수정
    const params = new URLSearchParams({
      adf_cd: '25',
      utm_source: 'naver_brand+search=보증부',
      n_media: '27758',
      n_query: 'IBK저축은행',
      n_rank: '1',
      n_ad_group: 'grp-a001-04-000000041607267',
      n_ad: 'nad-a001-04-000000330861122',
      n_keyword_id: 'nkw-a001-04-000006153679739',
      n_keyword: 'IBK저축은행',
      n_campaign_type: '4',
      n_contract: 'tct-a001-04-000000001007674',
      n_ad_group_type: '5',
    });

    navigate(`/guarantee?${params.toString()}`);
  }, [navigate]);

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
