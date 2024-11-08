import React from 'react'
import '../css/topguarantee.css'

export default function TopGuarantee() {
  return (
    <div id='top-guarantee-body'>
      <div id='top-guarantee-container'>
        <div id='top-guarantee-bank'>IBK저축은행</div>
        <div id='top-guarantee-product'>보증부<br/>서민대출</div>
        <div id='top-guarantee-shortcut'>
          <div id='top-guarantee-shortcut-left'>간편한도조회</div>
          <div id='top-guarantee-shortcut-center'>
            <img src={require('../img/보증부선.png')} alt='line'/>
          </div>
          <div id='top-guarantee-shortcut-right'>대출신청</div>
        </div>
        <div id='top-guarantee-info'>
          <div className='top-guarantee-info-detail'>
            <p className='produnt-name'><span className='product-number'>01</span>사잇돌2</p>
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
            <p className='produnt-name'><span className='product-number'>01</span>온라인 햇살론</p>
            <ul>
              <li><p><span>한도 : </span>최대 2,000만원</p></li>
              <li><p><span>금리 : </span>연9%대</p></li>
              <li><p><span>기간 : </span>3년, 5년</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
