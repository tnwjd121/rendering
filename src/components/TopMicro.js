import React from 'react'
import '../css/topmicro.css'

export default function TopMicro() {
    const easyCheck = () => {
        window.location.href = 'https://sbloan.ibksb.co.kr/ibk/loan_form/loan_limit_01.jsp';
      }
      const  enroll00B = () =>{
        window.location.href ='https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step00B.jsp'
      }
    
    return (
     <div id='top-micro-body'>
        <div id='top-micro-container'>
            <div id='top-micro-bank'>IBK저축은행</div>
            <div id='top-micro-product'>소상공인<br/>4종대출</div>
            <div id='top-micro-shortcut-line'>
              <div id='top-micro-shortcut'>
                <div id='top-micro-shortcut-main' onClick={easyCheck}>
                    <span>대출</span>상담신청
                </div>
              </div>
            </div>
            <div id='top-micro-info'>
              <div className='top-micro-info-detail'>
                <p className='produnt-name'><span className='product-number'>01</span> i-빅론U</p>
                <ul>
                  <li><p><span>한도 : </span>최대 6,000만원</p></li>
                  <li><p><span>금리 : </span>연11~19%대</p></li>
                  <li><p><span>기간 : </span>최소 1년~최장 5년</p></li>
                </ul>
              </div>
              <div id='top-micro-info-line'>
                <img src={require('../img/신용대출선.png')} alt='line'/>
              </div>
              <div className='top-micro-info-detail'>
                <p className='produnt-name'><span className='product-number'>02</span> i-빅론U플러스</p>
                <ul>
                  <li><p><span>한도 : </span>최대 1억원</p></li>
                  <li><p><span>금리 : </span>연7~19%대</p></li>
                  <li><p><span>기간 : </span>최소 1년~최장 5년</p></li>
                </ul>
              </div>
              <div id='top-micro-info-line'>
                <img src={require('../img/신용대출선.png')} alt='line'/>
              </div>
              <div className='top-micro-info-detail'>
                <p className='produnt-name'><span className='product-number'>02</span> i-패스트론U</p>
                <ul>
                  <li><p><span>한도 : </span>최대 3,000만원</p></li>
                  <li><p><span>금리 : </span>연12~19%대</p></li>
                  <li><p><span>기간 : </span>최소 1년~최장 5년</p></li>
                </ul>
              </div>
            </div>
          </div>
            <div id='top-micro-detail'>
              <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 <span id='detail'>v</span></p>
            </div>
        </div>
      )
}
