import React, { useRef } from 'react'
import '../css/topmicro.css'
import QuickmenuMc from './QuickmenuMc';
import { LuChevronUp } from "react-icons/lu";

export default function TopMicro({onToggleMainMicro,showMainMicro}) {
  const topRef = useRef(null);

  const ClickTopButton = () => {
    topRef.current.scrollIntoView({behavior: 'smooth'});
  }

  // URL 확인 필요
    const enter = () => {
        window.location.href = 'https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step01_Evt.jsp';
      }
    
    return (
     <div id='top-micro-body' ref={topRef}>
        <div id='top-micro-container'>
            <div id='top-micro-bank'>IBK저축은행</div>
            <div id='top-micro-product'>소상공인<br/>4종대출</div>
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
                  <div className='micro-product-img'>
                    <img src={require('../img/1.png')}/> 
                  </div>
                  <div className='micro-product-name'>
                    <p>햇살론<br/>특례보증</p>
                  </div>
                </div>
                <ul>
                  <li><p><span>한도 : </span>최대 2,000만원</p></li>
                  <li><p><span>금리 : </span>연6%대</p></li>
                  <li><p><span>기간 : </span>1년~4년</p></li>
                </ul>
              </div>
              <div id='top-micro-info-line'>
                <img src={require('../img/소상공인선.png')} alt='line'/>
              </div>
              <div className='top-micro-info-detail'>
                <div className='micro-porduct'>
                  <div className='micro-product-img'>
                    <img src={require('../img/2.png')}/> 
                  </div>
                  <div className='micro-product-name'>
                    <p>아파트<br/>담보대출</p>
                  </div>
                </div>
                <ul>
                  <li><p><span>한도 : </span>최대 10억원</p></li>
                  <li><p><span>금리 : </span>연5~9%대</p></li>
                  <li><p><span>기간 : </span>운영자금 최대3년</p></li>
                </ul>
              </div>
              <div id='top-micro-info-line'>
                <img src={require('../img/소상공인선.png')} alt='line'/>
              </div>
              <div className='top-micro-info-detail'>
                <div className='micro-porduct'>
                  <div className='micro-product-img'>
                    <img src={require('../img/3.png')}/> 
                  </div>
                  <div className='micro-product-name'>
                    <p>소상공인<br/>신용대출</p>
                  </div>
                </div>
                <ul>
                  <li><p><span>한도 : </span>최대 2,000만원</p></li>
                  <li><p><span>금리 : </span>연7~13%대</p></li>
                  <li><p><span>기간 : </span>최대 5년이내</p></li>
                </ul>
              </div>
              <div id='top-micro-info-line'>
                <img src={require('../img/소상공인선.png')} alt='line'/>
              </div>
              <div className='top-micro-info-detail'>
                <div className='micro-porduct'>
                  <div className='micro-product-img'>
                    <img src={require('../img/4.png')}/> 
                  </div>
                  <div className='micro-product-name'>
                    <p>부동산<br/>담보대출</p>
                  </div>
                </div>
                <ul>
                  <li><p><span>한도 : </span>최대 5억원</p></li>
                  <li><p><span>금리 : </span>연7~13%대</p></li>
                  <li><p><span>기간 : </span>최대 5년이내</p></li>
                </ul>
              </div>
            </div>
          </div>
            <div id='top-micro-detail' onClick={onToggleMainMicro}>
              <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 <span id={!showMainMicro? 'detail' : 'detail-change'}><LuChevronUp /></span></p>
            </div> 
           <QuickmenuMc/> 
           <div id='top-button' onClick={ClickTopButton}>TOP</div>
        </div>
      )
}
