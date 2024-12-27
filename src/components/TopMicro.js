import React, { useEffect, useRef, useState } from 'react'
import '../css/topmicro.css'
import QuickmenuMc from './QuickmenuMc';
import { LuChevronUp } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa";
import { useIsMoblie } from '../hooks/useIsMoblie';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

export default function TopMicro({scrollToSection, onToggleMainMicro, showMainMicro }) {
  const topRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMoblie();
  const location = useLocation();

  const products = [
    {
      number:'01',
      productName:'사업자 햇살론대출',
      money: '최대 5,000만원',
      interestRate: '연 9%대',
      period: '최장 5년',
      ref: 'es'
    },
    {
      number:'02',
      productName:'사업자 아파트 담보대출',
      money: '최대 10억원',
      interestRate: '연 5.8% ~ 연 9.5%',
      period: '운영자금 최장 3년',
      ref: 'ea'
    },
    {
      number:'03',
      productName:'소상공인 신용대출',
      money: '최대 1억원',
      interestRate: '연 8.13% ~ 연 14.16%',
      period: '최장 5년',
      ref: 'mc'
    },
    {
      number:'04',
      productName:'소상공인 부동산 담보대출',
      money: '최대 60억원',
      interestRate: '연 7.72% ~ 연 13.79%',
      period: '최장 5년',
      ref: 'mp'
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
  const enter = () => {
    window.location.href = `https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step01_Evt.jsp${currentParams}`;
  }
  const enterM = () => {
    window.location.href = `https://sbloan.ibksb.co.kr/ibk/m/loan_form/loan_step01_Evt.jsp${currentParams}`;
  }

  return (
    <div>
    {isMobile?(
    <div id='top-micro'>
      <div id='top-micro-body' ref={topRef}>
        <div id='top-micro-container'>
          <div id='top-micro-bank'>IBK저축은행</div>
          <div id='top-micro-product'>소상공인<br />4종대출</div>
          <div id='top-micro-shortcut-line'>
            <div id='top-micro-shortcut'>
              <div id='top-micro-shortcut-main' onClick={enterM}>
                <span id='top-micro-white'>대출</span>상담신청
              </div>
            </div>
          </div>
          <div id='top-micro-info'>
              <div id='left-button' onClick={handlePrev}><FaChevronLeft /></div>
              {products.map((product, index) => (
                <div 
                  key={index}
                  className={`top-micro-info-detail ${
                    index === currentIndex ? 'active' : 'inactive'
                  }`}
                  onClick={() => scrollToSection(product.ref)}
                  >
                  <p className='micro-product-name'><span className='micro-product-number'>{product.number}</span> {product.productName}</p>
                  <ul>
                    <li><p>{product.money}</p></li>
                    <li><p>{product.interestRate}</p></li>
                    <li><p>{product.period}</p></li>
                  </ul>
                </div>
              ))}
                <div id='right-button' onClick={handleNext}><FaChevronRight /></div>
                </div>
              <div className="slide-indicators-micro">
                {products.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
        </div>
        <QuickmenuMc />
        <div id='top-micro-detail' onClick={onToggleMainMicro}>
          <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 <span id={!showMainMicro ? 'detail' : 'detail-change'}><LuChevronUp /></span></p>
        </div>
        <div id='top-button' onClick={ClickTopButton}>
          <p><FaChevronUp /></p>
          <p id='top-button-text'>TOP</p>
        </div>
      </div>
     </div> 
    ):(
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
                <li><p>연 9%대</p></li>
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
                <li><p>연 5%대 ~ 연 9%대</p></li>
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
                <li><p>연 8%대 ~ 연 14%대</p></li>
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
                <li><p>연 7%대 ~ 연 13%대</p></li>
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
      
    )}
    </div>
  )
}
