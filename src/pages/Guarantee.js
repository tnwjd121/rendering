import React from 'react'
import Footer from '../components/Footer'
import '../css/footer.css'
import '../css/maingruarantee.css'
import MainGuarantee from '../components/MainGuarantee'
import TopGuarantee from '../components/TopGuarantee'


export default function Guarantee() {
  return (
    <div>
      <TopGuarantee/>
      <MainGuarantee/>
      <Footer/>
    </div>
  )
}
