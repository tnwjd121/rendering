import React, { useRef } from 'react'
import '../css/topmicro.css'
import QuickmenuMc from './QuickmenuMc';
import { LuChevronUp } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa";

export default function TopMicro({ onToggleMainMicro, showMainMicro }) {
  const topRef = useRef(null);

  const ClickTopButton = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  // URL 확인 필요
  const enter = () => {
    window.location.href = 'https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step01_Evt.jsp';
  }

  return (
    <div id='top-micro-body' ref={topRef}>
      <div id='top-micro-container'>
        <div id='top-micro-bank'>IBK저축은행</div>
        <div id='top-micro-product'>소상공인<br />4종대출</div>
        <div id='top-micro-shortcut-line'>
          <div id='top-micro-shortcut'>
            <div id='top-micro-shortcut-main' onClick={enter}>
              <span id='top-micro-white'>대출</span>상담신청
            </div>
          </div>
        </div>
        <div id='top-micro-info'>
          <div className='top-micro-info-detail'>
            <div className='micro-porduct'>
              <div className='micro-product-number'>
                <p>01</p>
              </div>
              <div className='micro-product-name'>
                <p>사업자<br />햇살론대출</p>
              </div>
            </div>
            <ul>
              <li><p>최대 5,000만원</p></li>
              <li><p>연9%대</p></li>
              <li><p>최장 5년</p></li>
            </ul>
          </div>
          <div id='top-micro-info-line'>
            <img src={require('../img/소상공인선.png')} alt='line' />
          </div>
          <div className='top-micro-info-detail'>
            <div className='micro-porduct'>
              <div className='micro-product-number'>
                <p>02</p>
              </div>
              <div className='micro-product-name'>
                <p>사업자 아파트<br />담보대출</p>
              </div>
            </div>
            <ul>
              <li><p>최대 10억원</p></li>
              <li><p>연5%대~연9%대</p></li>
              <li><p>운영자금 최장 3년</p></li>
            </ul>
          </div>
          <div id='top-micro-info-line'>
            <img src={require('../img/소상공인선.png')} alt='line' />
          </div>
          <div className='top-micro-info-detail'>
            <div className='micro-porduct'>
              <div className='micro-product-number'>
                <p>03</p>
              </div>
              <div className='micro-product-name'>
                <p>소상공인<br />신용대출</p>
              </div>
            </div>
            <ul>
              <li><p>최대 1억원</p></li>
              <li><p>연8%대~연14%대</p></li>
              <li><p>최장 5년</p></li>
            </ul>
          </div>
          <div id='top-micro-info-line'>
            <img src={require('../img/소상공인선.png')} alt='line' />
          </div>
          <div className='top-micro-info-detail'>
            <div className='micro-porduct'>
              <div className='micro-product-number'>
                <p>04</p>
              </div>
              <div className='micro-product-name'>
                <p>소상공인<br />부동산 담보대출</p>
              </div>
            </div>
            <ul>
              <li><p>최대 60억원</p></li>
              <li><p>연7%대~연13%대</p></li>
              <li><p>최장 5년</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div id='top-micro-detail' onClick={onToggleMainMicro}>
        <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 <span id={!showMainMicro ? 'detail' : 'detail-change'}><LuChevronUp /></span></p>
      </div>
      <QuickmenuMc />
      <div id='top-button' onClick={ClickTopButton}>
        <p><FaChevronUp /></p>
        <p id='top-button-text'>TOP</p>
      </div>
    </div>
  )
}
