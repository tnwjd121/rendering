import React, { useEffect, useRef, useState } from 'react'
import '../css/mainintegrate.css'

export default function MainIntegrate({ bigloneRef, saitdolRef, onlineRef }) {

    return (
        <div id='main-integrate-body'>
            <div id='main-integrate-product' >
                <div id='main-integrate-top' ref={bigloneRef}>
                    <div id='main-integrate-number' >
                        <img src={require('../img/01.png')}></img>
                    </div>
                    <div id='main-integrate-title'>
                        <div id='main-integrate-subtitle'>
                            <span>직장인을 위한 IBKSB 신용대출</span><hr />
                        </div>
                        <div id='main-integrate-maintitle'>i-빅론U</div>
                    </div>
                </div>
                <div id='main-integrate-container'>
                    <div className='base-date'>
                        기준일자: 2024.12.
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>가입대상</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>소득증빙이 가능한 만 20세 이상 고객</p></li>
                            <li><p>현 직장 재직기간 120일 이상 근로자 (연소득 최소 2,400만원 이상)</p></li>
                            <li>
                                <p>당행 CSS평가 시스템에 의해 대출한도가 산출되는 자 <br />
                                    (NICE개인신용평점 725점이상 및 KCB개인신용평점 535점 이상)
                                    <br />
                                    심사 진행 시, 개인소득산정에 따라 i-빅론U플러스 신청 여부 확인 가능
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출한도</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>최저 500만원 ~ 최대 6,000만원</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출금리</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li>
                                <p>
                                    연 11%대 ~ 연 19%대 (고정금리) <br />
                                    ※ 고객 AS등급 등에 따라 달리 적용
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출기간</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>최소 1년 ~ 최장 5년 (12개월 단위로 선택가능)</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>상환방법 및 이자부과시기</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>원리금균등분할상환</p></li>
                            <li><p>이자부과시기: 매월후취</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>중도상환수수료</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>상환금액의 1.6%
                                <br />※ 기한 전 상환 대출금액 X 기한 전 상환 수수료율 X 대출 잔여일수 ÷ 대출기간</p></li>
                            <li><p>면제기준<br />: 대출취급일부터 3년 경과 시 중도상환수수료 면제</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>부대비용</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>인지세법에 따라 대출약정 시 납부하는 세금으로 수입인지비용 발생</p></li>
                            <li>
                                <p>고객과 저축은행 각 50% 부담
                                    <table id='integrate-biglone-table'>
                                        <tr>
                                            <td>대출금리</td>
                                            <td>5천만원이하</td>
                                            <td>5천만원초과<br />~1억원</td>
                                            <td>1억원초과<br />~10억원</td>
                                            <td>10억원초과</td>
                                        </tr>
                                        <tr>
                                            <td>인지세액</td>
                                            <td>없음</td>
                                            <td>7만원</td>
                                            <td>15만원</td>
                                            <td>35만원</td>
                                        </tr>
                                    </table>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>연체금리</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 20% 이내</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-info'>
                        <p>IBK저축은행 준법감시인심의필 2024-00호 (2024.00.00.~2025.00.00.)</p>
                        <p>저축은행중앙회심의필 제2024-00000호 (2024.00.00.~2025.00.00.)</p>
                    </div>
                </div>
            </div>
            <div id='main-integrate-product' >
                <div id='main-integrate-top' ref={saitdolRef}>
                    <div id='main-integrate-number2' >
                        <img src={require('../img/02.png')}></img>
                    </div>
                    <div id='main-integrate-title'>
                        <div id='main-integrate-subtitle'>
                            <span>중·저신용 거래자 대상의 정부지원대출</span><hr />
                        </div>
                        <div id='main-integrate-maintitle' >사잇돌2</div>
                    </div>
                </div>
                <div id='main-integrate-container'>
                    <div className='base-date'>
                        기준일자: 2024.12.
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>가입대상</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>소득증빙이 가능한 만 19세 이상 고객</p></li>
                            <li><p>근로자: 현 직장 5개월 이상 재직 중이며, 연소득 1,200만원 이상인 자</p></li>
                            <li><p>사업자: 사업 개시일로부터 4개월 이상 사업 운영 중이며, 연소득 600만원 이상인 자</p></li>
                            <li>
                                <p>연금수령자: 연금 1회 이상 수령자 (국민연금, 공무원연금, 군인연금, 사학연금) 중,<br />
                                    <span id='padding-five'></span>연소득 600만원 이상인자</p>
                            </li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출한도</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>최대 3,000만원 (서울보증보험 보증금액 범위 내)</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출금리</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li>
                                <p>
                                    연 12%대 ~ 연 17%대 (고정금리)<br />
                                    ※ 서울보증보험 CSS결과에 따라 차등적용
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출기간</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>최장 5년 (보증기간 이내)</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>상환방법 및 이자부과시기</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>원리금균등분할상환</p></li>
                            <li><p>이자부과시기: 매월후취</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>중도상환수수료</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>없음</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>부대비용</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>없음</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>연체금리</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 20% 이내</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-info'>
                        <p>IBK저축은행 준법감시인심의필 2024-00호 (2024.00.00.~2025.00.00.)</p>
                        <p>저축은행중앙회심의필 제2024-00000호 (2024.00.00.~2025.00.00.)</p>
                    </div>
                </div>
            </div>
            <div id='main-integrate-product' >
                <div id='main-integrate-top' ref={onlineRef}>
                    <div id='main-integrate-number2' >
                        <img src={require('../img/03.png')}></img>
                    </div>
                    <div id='main-integrate-title' >
                        <div id='main-integrate-subtitle'>
                            <span>저신용·저소득 직장인을 위한 서민지원대출</span><hr />
                        </div>
                        <div id='main-integrate-maintitle' >온라인 햇살론</div>
                    </div>
                </div>
                <div id='main-integrate-container'>
                    <div className='base-date'>
                        기준일자: 2024.12.
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>가입대상</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>소득증빙이 가능한 만 19세 이상 고객</p></li>
                            <li>
                                <p>개인신용평점이 하위 100분의 20 이하 및 연간소득 4,500만원 이하에 해당하는 근로자<br />
                                    ※ 단, 연소득 3,500만원 이하 (3개월 이상 재직 중)인 경우 개인신용평점과 무관하게 가능
                                </p>
                            </li>
                            <li><p>서민금융진흥원의 금융교육을 이수한 자</p></li>
                            <li><p>서민금융진흥원 재무진단 평가모형 4등급 이하에 해당하는 근로자</p></li>
                            <li>
                                <p>아래의 조건에 모두 해당하는 경우 신청 가능<br />
                                    1) 현 직장 건강보험료 3개월 이상 정상 납부 (현 직장 1개월 이상 근로 및 급여 수령 필수)<br />
                                    2) 본인 명의의 공동인증서 또는 금융인증서, 휴대전화 보유
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출한도</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>최대 2,000만원</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출금리</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li>
                                <p>
                                    근로자: 연 9%대 (12개월변동금리)<br />
                                    ※ 햇살론 (근로자)대비 0.75%p 우대금리 적용<br />
                                    ※ 대출금리 = 기준금리 + 가산금리<br />
                                    - 기준금리: 전전월 저축은행 전체 1년 만기 정기예금 가중평균 금리<br />
                                    - 가산금리: 고객 신용평점 등에 따라 달리 적용
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>대출기간</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>3년, 5년</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>상환방법 및 이자부과시기</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>원리금균등분할상환</p></li>
                            <li><p>이자부과시기: 매월후취</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>중도상환수수료</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>없음</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>부대비용</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>보증수수료: 서민금융진흥원 보증금액의 연 2.5%</p></li>
                            <li>
                                <p>
                                    보증료 우대사항<br />
                                    1) 저소득 청년 (연소득 3,500만원 이하, 만 34세 이하) 0.5%p 인하<br />
                                    2) 기타 (신용부채관리 컨설팅 이수자, 금융교육 이수자) 0.1%p 인하<br />
                                    ※ 신용부채관리 컨설팅 및 금융교육 이수자: '21.7.26.신규 신청접수분부터 신청일 이전 1년 이내<br />
                                    <span id='padding-one'></span>서민금융진흥원에서 해당 교육 이수한 경우<br />
                                </p>
                            </li>
                            <li><p>
                                보증료인하: 대출금리가 연 10.5%를 초과하는 경우, 동 초과분 (대출금리-10.5%)의 60%에 해당하는 만큼의<br />
                                보증료율 인하적용
                            </p>
                            </li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-title'>
                        <span>연체금리</span><hr />
                    </div>
                    <div className='main-integrate-text-detail'>
                        <ul>
                            <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 15% 이내</p></li>
                        </ul>
                    </div>
                    <div className='main-integrate-text-info'>
                        <p>IBK저축은행 준법감시인심의필 2024-00호 (2024.00.00.~2025.00.00.)</p>
                        <p>저축은행중앙회심의필 제2024-00000호 (2024.00.00.~2025.00.00.)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
