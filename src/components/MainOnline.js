import React from 'react'
import '../css/mainproduct.css'

export default function MainOnline() {

  return (
    <div id='main-product-body'>
      <div id='main-product-container'>
        <div id='main-product-text-title'>
          <span>가입대상</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>소득증빙이 가능한 만 19세 이상 고객</p></li>
            <li><p>
                개인신용평점이 하위 100분의 20 이하 및 연간소득<br/> 
                4,500만원이하에 해당하는 근로자<br/>
                ※ 단, 연소득 3,500만원 이하(3개월 이상 재직 중)인 <br/>
                경우 개인신용평점과 무관하게 가능
            </p></li>
            <li><p>서민금융진흥원의 금융교육을 이수한 자</p></li>
            <li><p>서민금융진흥원 재무진단 평가모형 4등급 이하에<br/> 해당하는 근로자<br/>연소득 600만원 이상인자</p></li>
            <li><p>
                아래의 조건에 모두 해당하는 경우 신청 가능<br/>
                1) 현 직장 건강보험료 3개월 이상 정상 납부<br/>
                (현 직장 1개월 이상 근로 및 급여 수령 필수)<br/>
                2) 본인 명의의 공동인증서 또는 금융인증서,<br/>
                휴대전화 보유<br/>

            </p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>대출한도</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>최대 2,000만원</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>대출금리</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>
                근로자: 연 9%대(12개월변동금리)<br/>
                ※ 햇살론(근로자)대비 0.75%p 우대금리 적용<br/>
                ※ 대출금리 = 기준금리 + 가산금리<br/>
                - 기준금리: 전전월 저축은행 전체 1년 만기 <br/>
                <span id='margin-left-one'>정기예금 가중평균 금리</span><br/>
                - 가산금리: 고객 신용평점 등에 따라 달리 적용
            </p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>대출기간</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>3년, 5년</p></li>
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
            <li><p>보증수수료: 서민금융진흥원 보증금액의 연 2.5%</p></li>
            <li><p>
                보증료 우대사항<br/>
                1) 저소득 청년(연소득 3,500만원 이하, 만 34세 이하) <br/>0.5%p 인하<br/>
                2) 기타(신용부채관리 컨설팅 이수자, 금융교육 이수자) <br/>0.1%p 인하<br/>
                ※ 신용부채관리 컨설팅 및 금융교육 이수자: <br/>
                '21.7.26.신규 신청접수분부터 신청일 이전 1년 이내<br/>
                서민금융진흥원에서 해당 교육 이수한 경우<br/>
            </p></li>
            <li><p>보증료인하: 대출금리가 연 10.5%를 초과하는 경우,<br/> 
            동 초과분(대출금리-10.5%)의 60%에 해당하는 만큼의<br/> 
            보증료율 인하적용</p></li>
          </ul>
        </div>
        <div id='main-product-text-title'>
          <span>연체금리</span><hr />
        </div>
        <div id='main-product-text-detail'>
          <ul>
            <li><p>대출금리 + 3% 이내(연체가산 이자율), 최대 15% 이내</p></li>
          </ul>
        </div>
        <div id='main-product-text-info'>
          <p>IBK저축은행 준법감시인심의필 2024-00호<br/>(2024.00.00.~2025.00.00.)</p>
          <p>저축은행중앙회심의필 제2024-00000호<br/>(2024.00.00.~2025.00.00.)</p>
        </div>
      </div>
    </div>
  )
}
