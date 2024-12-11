import React, { useEffect, useRef, useState } from 'react'
import '../css/topguarantee.css'
import Quickmenu from './QuickmenuGu'
import { LuChevronUp } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useIsMoblie } from '../hooks/useIsMoblie';

export default function TopGuarantee({scrollToSection, onToggleMainGuarantee, showMainGuarantee}) {
  const topRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMoblie();
  
  const products = [
    {
      number:'01',
      productName:'사잇돌2',
      money: '최대 3,000만원',
      interestRate: '연 12%대 ~ 연 17%대',
      period: '최장 5년',
      ref: 'saitdol'
    },
    {
      number:'02',
      productName:'온라인 햇살론',
      money: '최대 2,000만원',
      interestRate: '연 9%대',
      period: '3년, 5년',
      ref: 'loan'
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
    topRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const easyCheck = () => {
    window.location.href = 'https://sbloan.ibksb.co.kr/ibk/loan_form/loan_limit_01.jsp';
  }
  const  enroll00S = () =>{
    window.location.href ='https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step00S.jsp'
  }
  const easyCheckM = () => {
    window.location.href = 'https://sbloan.ibksb.co.kr/ibk/m/loan_form/loan_limit_01.jsp';
  }
  const  enroll00SM = () =>{
    window.location.href ='https://sbloan.ibksb.co.kr/ibk/m/loan_form/loan_step00S.jsp'
  }
 
  return (
    <div>
    {isMobile ? (
      <div id='top-guarantee'>
        <div id='top-guarantee-body' ref={topRef}>
          <div id='top-guarantee-container'>
            <div id='top-guarantee-bank'>IBK저축은행</div>
            <div id='top-guarantee-product'>보증부<br/>서민대출</div>
            <div id='top-guarantee-shortcut-line'>
              <div id='top-guarantee-shortcut'>
                <div id='top-guarantee-shortcut-left' onClick={easyCheckM}>간편한도조회</div>
                <div id='top-guarantee-shortcut-center'>
                  <img src={require('../img/보증부선.png')} alt='line'/>
                </div>
                <div id='top-guarantee-shortcut-right' onClick={enroll00SM}>대출신청</div>
              </div>
            </div>
            <div id='top-guarantee-info'>
              <div id='left-button' onClick={handlePrev}><FaChevronLeft /></div>
              {products.map((product, index) => (
                <div 
                  key={index}
                  className={`top-guarantee-info-detail ${
                    index === currentIndex ? 'active' : 'inactive'
                  }`}
                  onClick={() => scrollToSection(product.ref)}
                  >
                  <p className='guarantee-product-name'><span className='guarantee-product-number'>{product.number}</span> {product.productName}</p>
                  <ul>
                    <li><p>{product.money}</p></li>
                    <li><p>{product.interestRate}</p></li>
                    <li><p>{product.period}</p></li>
                  </ul>
                </div>
              ))}
                <div id='right-button' onClick={handleNext}><FaChevronRight /></div>
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
            <Quickmenu/>  
            <div id='top-guarantee-detail' onClick={onToggleMainGuarantee}>
              <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 <span id={!showMainGuarantee? 'detail' : 'detail-change'}><LuChevronUp /></span></p>
            </div> 
            <div id='top-button' onClick={ClickTopButton}>
              <p><FaChevronUp /></p>
              <p id='top-button-text'>TOP</p>
            </div>
        </div>
      </div>
    ):(
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
                <li><p>최대 3,000만원</p></li>
                <li><p>연 12%대 ~ 연 17%대</p></li>
                <li><p>최장 5년</p></li>
              </ul>
            </div>
            <div id='top-guarantee-info-line'>
              <img src={require('../img/보증부상품구분선.png')} alt='line'/>
            </div>
            <div className='top-guarantee-info-detail'>
              <p className='guarantee-product-name2'><span className='guarantee-product-number'>02</span> 온라인 햇살론</p>
              <ul>
                <li><p>최대 2,000만원</p></li>
                <li><p>연 9%대</p></li>
                <li><p>3년, 5년</p></li>
              </ul>
            </div>
          </div>
        </div>
          <div id='top-guarantee-detail' onClick={onToggleMainGuarantee}>
            <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 <span id={!showMainGuarantee? 'detail' : 'detail-change'}><LuChevronUp /></span></p>
          </div> 
          <Quickmenu/>  
          <div id='top-button' onClick={ClickTopButton}>
            <p><FaChevronUp /></p>
            <p id='top-button-text'>TOP</p>
          </div>
      </div>
    )}
          
    </div>
  )
}
