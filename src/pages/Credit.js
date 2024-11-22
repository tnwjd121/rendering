import React, { useState } from 'react'
import MainCredit from '../components/MainCredit'
import Footer from '../components/Footer'
import TopCredit from '../components/TopCredit'

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
      {showMainCredit && <MainCredit/>}
      <Footer/>
    </div>
  )
}
