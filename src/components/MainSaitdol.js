import React from 'react'
import '../css/mainproduct.css'

export default function MainSaitdol() {
  return (
    <div id='main-product-body'>
      <div id='main-product-container'>
        <div className='base-date-integrate'>
          기준일자: 2024.12.
        </div>
        <div id='main-product-text-title'>
          <span>가입대상</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>소득증빙이 가능한 만 19세 이상 고객</p></li>
            <li><p>근로자: 현 직장 5개월 이상 재직 중이며,<br /><span style={{paddingLeft:"11.5vw"}}></span> 연소득 1,200만원 이상인 자</p></li>
            <li><p>사업자: 사업 개시일로부터 4개월 이상 사업 운영 중이며,<br /><span style={{paddingLeft:"11.5vw"}}></span> 연소득 600만원 이상인 자</p></li>
            <li><p>연금수령자: 연금 1회 이상 수령자 <br /><span style={{paddingLeft:"18vw"}}></span> (국민연금, 공무원연금, 군인연금, 사학연금) 중,<br /><span style={{paddingLeft:"18vw"}}></span>연소득 600만원 이상인자</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>대출한도</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>최대 3,000만원 (서울보증보험 보증금액 범위 내)</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>대출금리</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>연 12%대 ~ 연 17%대 (고정금리)<br />※ 서울보증보험 CSS결과에 따라 차등적용</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>대출기간</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>최장 5년 (보증기간 이내)</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>상환방법 및 이자부과시기</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>원리금균등분할상환</p></li>
            <li><p>이자부과시기: 매월후취</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>중도상환수수료</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>없음</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>부대비용</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>없음</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>연체금리</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 20% 이내</p></li>
          </ul>
        </div>
        <div id='main-product-text-info'>
          <p>IBK저축은행 준법감시인심의필 2024-00호<br /> (2024.00.00.~2025.00.00.)</p>
          <p>저축은행중앙회심의필 제2024-00000호<br /> (2024.00.00.~2025.00.00.)</p>
        </div>
      </div>
    </div>
  )
}
