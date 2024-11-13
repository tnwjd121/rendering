import React from 'react'
import '../css/topcredit.css'

export default function TopCredit() {
    const easyCheck = () => {
        window.location.href = 'https://sbloan.ibksb.co.kr/ibk/loan_form/loan_limit_01.jsp';
      }
      const  enroll00B = () =>{
        window.location.href ='https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step00B.jsp'
      }
    
    return (
     <div id='top-credit-body'>
        <div id='top-credit-container'>
            <div id='top-credit-bank'>IBK저축은행</div>
            <div id='top-credit-product'>직장인<br/>신용대출</div>
            <div id='top-credit-shortcut-line'>
              <div id='top-credit-shortcut'>
                <div id='top-credit-shortcut-left' onClick={easyCheck}>간편한도조회</div>
                <div id='top-credit-shortcut-center'>
                  <img src={require('../img/보증부선.png')} alt='line'/>
                </div>
                <div id='top-credit-shortcut-right' onClick={enroll00B}>대출신청</div>
              </div>
            </div>
            <div id='top-credit-info'>
              <div className='top-credit-info-detail'>
                <p className='produnt-name'><span className='product-number'>01</span> i-빅론U</p>
                <ul>
                  <li><p><span>한도 : </span>최대 6,000만원</p></li>
                  <li><p><span>금리 : </span>연11~19%대</p></li>
                  <li><p><span>기간 : </span>최소 1년~최장 5년</p></li>
                </ul>
              </div>
              <div id='top-credit-info-line'>
                <img src={require('../img/신용대출선.png')} alt='line'/>
              </div>
              <div className='top-credit-info-detail'>
                <p className='produnt-name'><span className='product-number'>02</span> i-빅론U플러스</p>
                <ul>
                  <li><p><span>한도 : </span>최대 1억원</p></li>
                  <li><p><span>금리 : </span>연7~19%대</p></li>
                  <li><p><span>기간 : </span>최소 1년~최장 5년</p></li>
                </ul>
              </div>
              <div id='top-credit-info-line'>
                <img src={require('../img/신용대출선.png')} alt='line'/>
              </div>
              <div className='top-credit-info-detail'>
                <p className='produnt-name'><span className='product-number'>02</span> i-패스트론U</p>
                <ul>
                  <li><p><span>한도 : </span>최대 3,000만원</p></li>
                  <li><p><span>금리 : </span>연12~19%대</p></li>
                  <li><p><span>기간 : </span>최소 1년~최장 5년</p></li>
                </ul>
              </div>
            </div>
          </div>
            <div id='top-credit-detail'>
              <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 <span id='detail'>v</span></p>
            </div>
        </div>
      )
}
