import React, { useState } from 'react'
import Footer from '../components/Footer'
import '../css/footer.css'
import '../css/mainguarantee.css'
import MainGuarantee from '../components/MainGuarantee'
import TopGuarantee from '../components/TopGuarantee'


export default function Guarantee() {
  const [showMainGuarantee, setShowMainGuarantee] = useState(false);

  const OpenMainGuarantee = () => {
    setShowMainGuarantee(!showMainGuarantee);
  }
  return (
    <div>
      <TopGuarantee onToggleMainGuarantee={OpenMainGuarantee}/>
      {showMainGuarantee && <MainGuarantee />}
      <Footer/>
    </div>
  )
}
