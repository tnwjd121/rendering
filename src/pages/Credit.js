import React, { useState } from 'react'
import MainCredit from '../components/MainCredit'
import Footer from '../components/Footer'
import TopCredit from '../components/TopCredit'
import { CSSTransition } from 'react-transition-group';
import '../css/credit.css'

export default function Credit() {
  const [showMainCredit, setShowMainCredit] = useState(false);

  const OpenMainCredit = () =>{
    setShowMainCredit(!showMainCredit);
  }

  return (
    <div>
      <TopCredit 
        onToggleMainCredit={OpenMainCredit}
        showMainCredit={showMainCredit}
      />
      <CSSTransition
        in={showMainCredit}
        timeout={300} // 애니메이션 지속 시간
        classNames="main-credit-transition"
        unmountOnExit
      >
        <MainCredit/>
      </CSSTransition>
      <Footer/>
    </div>
  )
}
