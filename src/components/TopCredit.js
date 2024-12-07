import React, { useRef } from 'react'
import '../css/topcredit.css'
import QuickmenuCr from './QuickmenuCr';
import { LuChevronUp } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa";

export default function TopCredit({ onToggleMainCredit, showMainCredit }) {
  const topRef = useRef(null);

  const ClickTopButton = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const easyCheck = () => {
    window.location.href = 'https://sbloan.ibksb.co.kr/ibk/loan_form/loan_limit_01.jsp';
  }
  const enroll00B = () => {
    window.location.href = 'https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step00B.jsp'
  }

  return (
    <div id='top-credit-body' ref={topRef}>
      <div id='top-credit-container'>
        <div id='top-credit-bank'>IBK저축은행</div>
        <div id='top-credit-product'>직장인<br />신용대출</div>
        <div id='top-credit-shortcut-line'>
          <div id='top-credit-shortcut'>
            <div id='top-credit-shortcut-left' onClick={easyCheck}>간편한도조회</div>
            <div id='top-credit-shortcut-center'>
              <img src={require('../img/보증부선.png')} alt='line' />
            </div>
            <div id='top-credit-shortcut-right' onClick={enroll00B}>대출신청</div>
          </div>
        </div>
        <div id='top-credit-info'>
          <div className='top-credit-info-detail'>
            <p className='credit-product-name'><span className='credit-product-number'>01</span> i-빅론U</p>
            <ul>
              <li><p>최대 6,000만원</p></li>
              <li><p>연 11%대 ~ 연 19%대</p></li>
              <li><p>최장 5년</p></li>
            </ul>
          </div>
          <div id='top-credit-info-line'>
            <img src={require('../img/신용대출선.png')} alt='line' />
          </div>
          <div className='top-credit-info-detail'>
            <p className='credit-product-name'><span className='credit-product-number'>02</span> i-빅론U플러스</p>
            <ul>
              <li><p>최대 1억원</p></li>
              <li><p>연 7%대 ~ 연 19%대</p></li>
              <li><p>최장 5년</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div id='top-credit-detail' onClick={onToggleMainCredit}>
        <p><span id='loanproduct'>대출상품정보</span>  자세히 보기 <span id={!showMainCredit ? 'detail' : 'detail-change'}><LuChevronUp /></span></p>
      </div>
      <QuickmenuCr />
      <div id='top-button-credit' onClick={ClickTopButton}>
        <p><FaChevronUp /></p>
        <p id='top-button-credit-text'>TOP</p>
      </div>
    </div>
  )
}
