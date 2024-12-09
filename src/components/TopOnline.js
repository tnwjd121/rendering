import React from 'react'
import '../css/topproduct.css'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function TopOnline() {
  const totalCheck = () => {
    window.location.href = 'https://webloan.ibksb.co.kr/?AD_NO=AD0017&AGENT_ID=SL002&RECOMMENDER=Y?adf_cd=40';
  }
  const navigate = useNavigate();
  const navigateToIntegrate = () => {
    navigate('/integrate')
  }
  return (
    <div id='top-product-body'>
      <div id='top-product-container'>
        <div id='top-prev-button' onClick={navigateToIntegrate}>
          <FaArrowLeft />
        </div>
        <div id='top-product-subtitle-online'>저신용·저소득 직장인을 위한<br />서민지원대출</div>
        <div id='top-product-title'>온라인 햇살론</div>
        <div id='top-product-list'>
          <p>
            <img src={require('../img/liststyle.png')}></img>
            연 9%대
          </p>
          <p>
            <img src={require('../img/liststyle.png')}></img>
            최대 2,000만원
          </p>
          <p>
            <img src={require('../img/liststyle.png')}></img>
            3년, 5년
          </p>
        </div>
        <div id='top-product-shortcut' onClick={totalCheck}>
          <img src={require('../img/바로가기모바일.png')}></img>
        </div>
      </div>
    </div>
  )
}
