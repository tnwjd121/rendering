import React, { useRef } from 'react'
import '../css/topguarantee.css'
import Quickmenu from './QuickmenuGu'
import { LuChevronUp } from "react-icons/lu";

export default function TopGuarantee({onToggleMainGuarantee, showMainGuarantee}) {
  const topRef = useRef(null);

  const ClickTopButton = () => {
    topRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const easyCheck = () => {
    window.location.href = 'https://sbloan.ibksb.co.kr/ibk/loan_form/loan_limit_01.jsp';
  }
  const  enroll00S = () =>{
    window.location.href ='https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step00S.jsp'
  }

  return (
    <div id='top-guarantee-body' ref={topRef}>
      <div id='top-guarantee-container'>
        <div id='top-guarantee-bank'>IBK저축은행</div>
        <div id='top-guarantee-product'>보증부<br/>서민대출</div>
        <div id='top-guarantee-shortcut-line'>
          <div id='top-guarantee-shortcut'>
            <div id='top-guarantee-shortcut-left' onClick={easyCheck}>간편한도조회</div>
            <div id='top-guarantee-shortcut-center'>
              <img src={require('../img/보증부선.png')} alt='line'/>
            </div>
            <div id='top-guarantee-shortcut-right' onClick={enroll00S}>대출신청</div>
          </div>
        </div>
        <div id='top-guarantee-info'>
          <div className='top-guarantee-info-detail'>
            <p className='guarantee-product-name'><span className='guarantee-product-number'>01</span> 사잇돌2</p>
            <ul>
              <li><p><span>한도 : </span>최대 3,000만원</p></li>
              <li><p><span>금리 : </span>연13~19%대</p></li>
              <li><p><span>기간 : </span>최장 5년</p></li>
            </ul>
          </div>
          <div id='top-guarantee-info-line'>
            <img src={require('../img/보증부상품구분선.png')} alt='line'/>
          </div>
          <div className='top-guarantee-info-detail'>
            <p className='guarantee-product-name'><span className='guarantee-product-number'>02</span> 온라인 햇살론</p>
            <ul>
              <li><p><span>한도 : </span>최대 2,000만원</p></li>
              <li><p><span>금리 : </span>연9%대</p></li>
              <li><p><span>기간 : </span>3년, 5년</p></li>
            </ul>
          </div>
        </div>
      </div>
        <div id='top-guarantee-detail' onClick={onToggleMainGuarantee}>
          <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 <span id={!showMainGuarantee? 'detail' : 'detail-change'}><LuChevronUp /></span></p>
        </div> 
       <Quickmenu/>  
       <div id='top-button' onClick={ClickTopButton}>TOP</div>
    </div>
  )
}
