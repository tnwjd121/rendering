import React from 'react'
import '../css/topproduct.css'

export default function TopBiglone() {
  const totalCheck = () => {
    window.location.href = 'https://webloan.ibksb.co.kr/?AD_NO=AD0017&AGENT_ID=SL002&RECOMMENDER=Y?adf_cd=40';
  }
  return (
    <div id='top-product-body'>
      <div id='top-product-container'>
        <div id='top-product-subtitle'>직장인을 위한 IBKSB 신용대출</div>
        <div id='top-product-title'>i-빅론U</div>
        <div id='top-product-list'>
          <p>
            <img src={require('../img/liststyle.png')}></img>
            연 11%대 ~ 연 19%대
          </p>
          <p>
            <img src={require('../img/liststyle.png')}></img>
            최대 6,000만원
          </p>
          <p>
            <img src={require('../img/liststyle.png')}></img>
            최소 1년 ~ 최장 5년까지
          </p>
        </div>
        <div id='top-product-shortcut' onClick={totalCheck}>
          <img src={require('../img/바로가기모바일.png')}></img>
        </div>
      </div>
    </div>
  )
}
