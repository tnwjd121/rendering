import React, { useEffect, useRef, useState } from 'react'
import '../css/topcredit.css'
import QuickmenuCr from './QuickmenuCr';
import { LuChevronUp } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useIsMoblie } from '../hooks/useIsMoblie';
import { useLocation } from 'react-router-dom';

export default function TopCredit({scrollToSection, onToggleMainCredit, showMainCredit }) {
  const topRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMoblie();
  const location = useLocation();

  const products = [
    {
      number:'01',
      productName:'i-빅론U',
      money: '최대 6,000만원',
      interestRate: '연 11%대 ~ 연 19%대',
      period: '최장 5년',
      ref: 'biglone'
    },
    {
      number:'02',
      productName:'i-빅론U플러스',
      money: '최대 1억원',
      interestRate: '연 7%대 ~ 연 19%대',
      period: '최장 5년',
      ref: 'biglone'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 해제
  }, [products.length]);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const ClickTopButton = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const currentParams = location.search;
  const easyCheck = () => {
    window.location.href = `https://sbloan.ibksb.co.kr/ibk/loan_form/loan_limit_01.jsp${currentParams}`;
  }
  const enroll00B = () => {
    window.location.href = `https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step00B.jsp${currentParams}`;
  }
  const easyCheckM = () => {
    window.location.href = `https://sbloan.ibksb.co.kr/ibk/m/loan_form/loan_limit_01.jsp${currentParams}`;
  }
  const enroll00BM = () => {
    window.location.href = `https://sbloan.ibksb.co.kr/ibk/m/loan_form/loan_step00B.jsp${currentParams}`;
  }

  return (
    <div>
    {isMobile ? (
      <div id='top-credit'>
      <div id='top-credit-body' ref={topRef}>
        <div id='top-credit-container'>
          <div id='top-credit-bank'>IBK저축은행</div>
          <div id='top-credit-product'>직장인<br />신용대출</div>
          <div id='top-credit-shortcut-line'>
            <div id='top-credit-shortcut'>
              <div id='top-credit-shortcut-left' onClick={easyCheckM}>간편한도조회</div>
              <div id='top-credit-shortcut-center'>
                <img src={require('../img/보증부선.png')} alt='line' />
              </div>
              <div id='top-credit-shortcut-right' onClick={enroll00BM}>대출신청</div>
            </div>
          </div>
          <div id='top-credit-info'>
              <div id='left-button-credit' onClick={handlePrev}><FaChevronLeft /></div>
              {products.map((product, index) => (
                <div 
                  key={index}
                  className={`top-credit-info-detail ${
                    index === currentIndex ? 'active' : 'inactive'
                  }`}
                  onClick={() => scrollToSection(product.ref)}
                  >
                  <p className='credit-product-name'><span className='credit-product-number'>{product.number}</span> {product.productName}</p>
                  <ul>
                    <li><p>{product.money}</p></li>
                    <li><p>{product.interestRate}</p></li>
                    <li><p>{product.period}</p></li>
                  </ul>
                </div>
              ))}
                <div id='right-button-credit' onClick={handleNext}><FaChevronRight /></div>
                </div>
              <div className="slide-indicators">
                {products.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
        </div>
        <QuickmenuCr />
        <div id='top-credit-detail' onClick={onToggleMainCredit}>
          <p><span id='loanproduct'>대출상품정보</span>  자세히 보기 <span id={!showMainCredit ? 'detail' : 'detail-change'}><LuChevronUp /></span></p>
        </div>
        <div id='top-button-credit' onClick={ClickTopButton}>
          <p><FaChevronUp /></p>
          <p id='top-button-credit-text'>TOP</p>
        </div>
      </div>
    </div>
    ):(
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
    )}
    </div>
  )
}
