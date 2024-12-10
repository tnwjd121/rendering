import React from 'react'
import '../css/maincredit.css'
import { useIsMoblie } from '../hooks/useIsMoblie'
export default function MainCredit({ bigloneRef }) {
    const isMobile = useIsMoblie();
    return (
        <div>
            {isMobile ? (
                <div id='main-credit-body'>
                    <div id='main-credit-product' ref={bigloneRef}>
                        <div className='main-credit-title'>
                            <div className='main-credit-subtitle'>
                                직장인을 위한 IBK저축은행 신용대출
                            </div>
                            <div className='main-credit-maintitle'>
                                i-빅론U / i-빅론U플러스
                            </div>
                        </div>
                        <div className='main-credit-text'>
                            <div className='base-date'>
                                기준일자: 2024.12.
                            </div>
                            <div className='main-credit-text-title'>
                                <span>가입대상</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>소득증빙 가능한 만 20세 이상 고객</p></li>
                                    <li><p>현 직장 재직기간 120일 이상 근로자 <br /> (연소득 최소 2,400만원 이상)</p></li>
                                    <li>
                                        <p>당행 CSS평가 시스템에 의해 대출한도가 산출되는 자</p>
                                        <p> (NICE개인신용평점 725점이상 및 KCB개인신용평점 <br />535점 이상)</p>
                                        <br />
                                        <p className='orange-color'>※ 심사 진행 시, 개인소득산정에 따라 i-빅론U플러스 <br /><span style={{ paddingLeft: "3.5vw" }}></span>신청 여부 확인 가능</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>대출한도</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p><span className='target-credit'>i-빅론U</span> 최저 500만원 ~ 최대 6,000만원</p></li>
                                    <li><p><span className='target-credit'>i-빅론U플러스</span> 최저 500만원 ~ 최대 1억원</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>대출금리</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p><span className='target-credit'>i-빅론U</span> 연 11%대 ~ 연 19%대 (고정금리) </p></li>
                                    <li>
                                        <p><span className='target-credit'>i-빅론U플러스</span> 연 7%대 ~ 연 19%대 (고정금리)</p>
                                        <p>※ 고객 AS등급 등에 따라 달리 적용</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>대출기간</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>최소 1년 ~ 최장 5년 (12개월 단위로 선택가능)</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>상환방법 및 이자부과시기</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>원리금균등분할상환</p></li>
                                    <li><p>이자부과시기: 매월후취</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>중도상환수수료</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li>
                                        <p>상환금액의 1.6%</p>
                                        <p>※ 기한 전 상환 대출금액 X 기한 전 상환 수수료율
                                            <br /><span style={{ paddingLeft: "3.5vw" }}></span> X 대출 잔여일수 ÷ 대출기간</p>
                                    </li>
                                    <li><p>면제기준<br />: 대출취급일부터 3년 경과 시 중도상환수수료 면제</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>부대비용</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>인지세법에 따라 대출약정 시 납부하는 세금으로 <br />수입인지비용 발생</p></li>
                                    <li><p>고객과 저축은행 각 50% 부담</p></li>
                                    <table id='biglone-table'>
                                        <tr>
                                            <td>5천만원이하</td>
                                            <td>5천만원초과<br />~1억원</td>
                                            <td>1억원초과<br />~10억원</td>
                                            <td>10억원초과</td>
                                        </tr>
                                        <tr>
                                            <td>없음</td>
                                            <td>7만원</td>
                                            <td>15만원</td>
                                            <td>35만원</td>
                                        </tr>
                                    </table>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>연체금리</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 20% 이내</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-info'>
                                <p>IBK저축은행 준법감시인심의필 2024-00호 (2024.00.00.~2025.00.00.)</p>
                                <p>저축은행중앙회심의필 제2024-00000호 (2024.00.00.~2025.00.00.)</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div id='main-credit-body'>
                    <div id='main-credit-product'>
                        <div className='main-credit-title'>
                            <div className='main-credit-subtitle'>
                                직장인을 위한 IBK저축은행 신용대출
                            </div>
                            <div className='main-credit-maintitle'>
                                i-빅론U / i-빅론U플러스
                            </div>
                        </div>
                        <div className='main-credit-text'>
                            <div className='base-date'>
                                기준일자: 2024.12.
                            </div>
                            <div className='main-credit-text-title'>
                                <span>가입대상</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>소득증빙 가능한 만 20세 이상 고객</p></li>
                                    <li><p>현 직장 재직기간 120일 이상 근로자 (연소득 최소 2,400만원 이상)</p></li>
                                    <li>
                                        <p>당행 CSS평가 시스템에 의해 대출한도가 산출되는 자</p>
                                        <p> (NICE개인신용평점 725점이상 및 KCB개인신용평점 535점 이상)</p>
                                        <br />
                                        <p className='orange-color'>※ 심사 진행 시, 개인소득산정에 따라 i-빅론U플러스 신청 여부 확인 가능</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>대출한도</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p><span className='target-credit'>i-빅론U</span> 최저 500만원 ~ 최대 6,000만원</p></li>
                                    <li><p><span className='target-credit'>i-빅론U플러스</span> 최저 500만원 ~ 최대 1억원</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>대출금리</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p><span className='target-credit'>i-빅론U</span> 연 11%대 ~ 연 19%대 (고정금리) </p></li>
                                    <li>
                                        <p><span className='target-credit'>i-빅론U플러스</span> 연 7%대 ~ 연 19%대 (고정금리)</p>
                                        <p>※ 고객 AS등급 등에 따라 달리 적용</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>대출기간</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>최소 1년 ~ 최장 5년 (12개월 단위로 선택가능)</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>상환방법 및 이자부과시기</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>원리금균등분할상환</p></li>
                                    <li><p>이자부과시기: 매월후취</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>중도상환수수료</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li>
                                        <p>상환금액의 1.6%</p>
                                        <p>※ 기한 전 상환 대출금액 X 기한 전 상환 수수료율 X 대출 잔여일수 ÷ 대출기간</p>
                                    </li>
                                    <li><p>면제기준<br />: 대출취급일부터 3년 경과 시 중도상환수수료 면제</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>부대비용</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>인지세법에 따라 대출약정 시 납부하는 세금으로 수입인지비용 발생</p></li>
                                    <li><p>고객과 저축은행 각 50% 부담</p></li>
                                    <table id='biglone-table'>
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
                                </ul>
                            </div>
                            <div className='main-credit-text-title'>
                                <span>연체금리</span><hr />
                            </div>
                            <div className='main-credit-text-detail'>
                                <ul>
                                    <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 20% 이내</p></li>
                                </ul>
                            </div>
                            <div className='main-credit-text-info'>
                                <p>IBK저축은행 준법감시인심의필 2024-00호 (2024.00.00.~2025.00.00.)</p>
                                <p>저축은행중앙회심의필 제2024-00000호 (2024.00.00.~2025.00.00.)</p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}
