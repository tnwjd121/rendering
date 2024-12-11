import React from 'react'
import '../css/mainguarantee.css'
import { useIsMoblie } from '../hooks/useIsMoblie'

export default function MainGuarantee({ saitdolRef, loanRef }) {
    const isMobile = useIsMoblie();
    return (
        <div>
            {isMobile ? (
                <div id='main-guarantee-body'>
                    <div id='main-guarantee-product' ref={saitdolRef}>
                        <div className='main-guarantee-title'>
                            <div className='main-guarantee-subtitle'>
                                중·저신용 거래자를 위한 정부지원 대출
                            </div>
                            <div className='main-guarantee-maintitle'>
                                사잇돌2
                            </div>
                        </div>
                        <div className='main-guarantee-text'>
                            <div className='base-date'>
                                기준일자: 2024.12.
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>가입대상</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>소득증빙 가능한 만 19세 이상 고객</p></li>
                                    <li>
                                        <p>
                                            <span className='target'>근로자</span> 현 직장 5개월 이상 재직 중 <br /><span style={{ paddingLeft: '16.5vw' }}></span>/ 연소득 1,200만원 이상인 자<br />
                                            <span className='target'>사업자</span> 사업 개시일로부터 4개월 이상 운영 <br /><span style={{ paddingLeft: '16.5vw' }}></span>/ 연소득 600만원 이상인 자<br />
                                            <span className='target'>연금수령자</span> 연금 1회 이상 수령 (국민연금, 공무원연금, <br /><span style={{ paddingLeft: '16.5vw' }}></span>군인연금, 사학연금) / 연소득 600만원 이상인 자<br />
                                        </p>
                                        <p>
                                            ※ 중복소득 인정: 합산소득 기준으로 산정
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출한도</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>최대 3,000만원 (서울보증보험 보증금액 범위 내)</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출금리</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>연 12%대 ~ 연 17%대 (고정금리 / 서울보증보험 CSS결과에 따라 차등 적용)</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출기간</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>최장 5년 (보증기간 이내)</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>상환방법 및 이자부과시기</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>원리금균등분할상환</p></li>
                                    <li><p>이자부과시기: 매월후취</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>중도상환수수료 및 부대비용</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>없음</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>연체금리</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 20% 이내</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-info'>
                                <p>IBK저축은행 준법감시인심의필 2024-00호 <br /> (2024.00.00.~2025.00.00.)</p>
                                <p>저축은행중앙회심의필 제2024-00000호 <br /> (2024.00.00.~2025.00.00.)</p>
                            </div>
                        </div>
                    </div>
                    <div id='main-guarantee-product' ref={loanRef}>
                        <div className='main-guarantee-title'>
                            <div className='main-guarantee-subtitle'>
                                저신용·저소득 직장인 대상의 서민지원대출
                            </div>
                            <div className='main-guarantee-maintitle'>
                                온라인 햇살론
                            </div>
                        </div>
                        <div className='main-guarantee-text'>
                            <div className='base-date'>
                                기준일자: 2024.12.
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>가입대상</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>소득증빙 가능한 만 19세 이상 고객</p></li>
                                    <li>
                                        <p>
                                            개인신용평점이 하위 100분의 20 이하 및 <br />연간소득 4,500만원 이하에 해당하는 근로자<br />
                                            ※ 단, 연소득 3,500만원 (3개월 이상 재직 중)인 경우 <br />개인신용평점과 무관하게 가능
                                        </p>
                                    </li>
                                    <li><p>서민금융진흥원의 금융교육을 이수한 자</p></li>
                                    <li><p>서민금융진흥원 재무진단 평가모형 4등급 이하에 해당하는 <br />근로자</p></li>
                                    <li><p>아래의 조건에 모두 해당하는 경우 신청 가능</p></li>
                                    <p className='none-list-p'>1) 현 직장 건강보험료 3개월 이상 정상 납부 <br /><span style={{ paddingLeft: '3vw' }}></span> (현 직장 1개월 이상 근로 및 급여 수령 필수)</p>
                                    <p className='none-list-p'>2) 본인 명의의 공동인증서 또는 금융인증서, 휴대전화 보유</p>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출한도</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>최대 2,000만원</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출금리</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>
                                        근로자: 연 9%대 (12개월변동금리)<br />
                                        ※ 햇살론 (근로자)대비 0.75%p 우대금리 적용<br />
                                        ※ 대출금리 = 기준금리 + 가산금리<br />
                                        - 기준금리: 전전월 저축은행 전체 1년 만기, <br /><span style={{ paddingLeft: '15.5vw' }}></span>정기예금 가중평균 금리<br />
                                        - 가산금리: 고객 신용평점 등에 따라 달리 적용 <br />
                                    </p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출기간</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>근로자: 3년, 5년</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>상환방법 및 이자부과시기</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>원리금균등분할상환</p></li>
                                    <li><p>이자부과시기: 매월후취</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>중도상환수수료</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>없음</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>부대비용</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>보증수수료: 서민금융진흥원 보증금액의 연 2.5%</p></li>
                                    <li><p>보증료 우대사항</p></li>
                                    <p className='none-list-p'>1) 저소득청년 (연소득 3,500만원 이하, 만 34세 이하) 0.5%p 인하</p>
                                    <p className='none-list-p'>2) 기타 (신용 부채관리 컨설팅 이수자, 금융교육 이수자) 0.1%p 인하</p>
                                    <p className='none-list-p'>※ 신용부채관리 컨설팅 금융교육 이수자: '21.7.26. 신규
                                        <br /><span style={{ paddingLeft: '3.8vw' }}></span> 신청접수분부터 신청일 이전 1년 이내 서민금융진흥원에서
                                        <br /><span style={{ paddingLeft: '3.8vw' }}></span>해당교육 이수한 경우</p>
                                    <li><p>보증료인하: 대출금리가 연 10.5%를 초과한 경우, 동 초과분
                                        <br /><span style={{ paddingLeft: '16vw' }}></span> (대출금리-10.5%)의 60%에 해당하는 만큼의
                                        <br /><span style={{ paddingLeft: '16vw' }}></span>보증료율 인하적용</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>연체금리</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 15% 이내</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-info'>
                                <p>IBK저축은행 준법감시인심의필 2024-00호 <br /> (2024.00.00.~2025.00.00.)</p>
                                <p>저축은행중앙회심의필 제2024-00000호 <br /> (2024.00.00.~2025.00.00.)</p>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div id='main-guarantee-body'>
                    <div id='main-guarantee-product' ref={saitdolRef}>
                        <div className='main-guarantee-title'>
                            <div className='main-guarantee-subtitle'>
                                중·저신용 거래자를 위한 정부지원 대출
                            </div>
                            <div className='main-guarantee-maintitle'>
                                사잇돌2
                            </div>
                        </div>
                        <div className='main-guarantee-text'>
                            <div className='base-date'>
                                기준일자: 2024.12.
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>가입대상</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>소득증빙 가능한 만 19세 이상 고객</p></li>
                                    <li>
                                        <p>
                                            <span className='target'>근로자</span> 현 직장 5개월 이상 재직 중 / 연소득 1,200만원 이상인 자<br />
                                            <span className='target'>사업자</span> 사업 개시일로부터 4개월 이상 운영 / 연소득 600만원 이상인 자<br />
                                            <span className='target'>연금수령자</span> 연금 1회 이상 수령 (국민연금, 공무원연금, 군인연금, 사학연금) / 연소득 600만원 이상인 자<br />
                                        </p>
                                        <p>
                                            ※ 중복소득 인정: 합산소득 기준으로 산정
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출한도</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>최대 3,000만원 (서울보증보험 보증금액 범위 내)</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출금리</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>연 12%대 ~ 연 17%대 (고정금리 / 서울보증보험 CSS결과에 따라 차등 적용)</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출기간</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>최장 5년 (보증기간 이내)</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>상환방법 및 이자부과시기</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>원리금균등분할상환</p></li>
                                    <li><p>이자부과시기: 매월후취</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>중도상환수수료 및 부대비용</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>없음</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>연체금리</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 20% 이내</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-info'>
                                <p>IBK저축은행 준법감시인심의필 2024-00호 (2024.00.00.~2025.00.00.)</p>
                                <p>저축은행중앙회심의필 제2024-00000호 (2024.00.00.~2025.00.00.)</p>
                            </div>
                        </div>
                    </div>
                    <div id='main-guarantee-product' ref={loanRef}>
                        <div className='main-guarantee-title'>
                            <div className='main-guarantee-subtitle'>
                                저신용·저소득 직장인 대상의 서민지원대출
                            </div>
                            <div className='main-guarantee-maintitle'>
                                온라인 햇살론
                            </div>
                        </div>
                        <div className='main-guarantee-text'>
                            <div className='base-date'>
                                기준일자: 2024.12.
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>가입대상</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>소득증빙 가능한 만 19세 이상 고객</p></li>
                                    <li>
                                        <p>
                                            개인신용평점이 하위 100분의 20 이하 및 연간소득 4,500만원 이하에 해당하는 근로자<br />
                                            ※ 단, 연소득 3,500만원 (3개월 이상 재직 중)인 경우 개인신용평점과 무관하게 가능
                                        </p>
                                    </li>
                                    <li><p>서민금융진흥원의 금융교육을 이수한 자</p></li>
                                    <li><p>서민금융진흥원 재무진단 평가모형 4등급 이하에 해당하는 근로자</p></li>
                                    <li><p>아래의 조건에 모두 해당하는 경우 신청 가능</p></li>
                                    <p className='none-list-p'>1) 현 직장 건강보험료 3개월 이상 정상 납부 (현 직장 1개월 이상 근로 및 급여 수령 필수)</p>
                                    <p className='none-list-p'>2) 본인 명의의 공동인증서 또는 금융인증서, 휴대전화 보유</p>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출한도</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>최대 2,000만원</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출금리</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>
                                        근로자: 연 9%대 (12개월변동금리)<br />
                                        ※ 햇살론 (근로자)대비 0.75%p 우대금리 적용<br />
                                        ※ 대출금리 = 기준금리 + 가산금리<br />
                                        - 기준금리: 전전월 저축은행 전체 1년 만기, 정기예금 가중평균 금리<br />
                                        - 가산금리: 고객 신용평점 등에 따라 달리 적용 <br />
                                    </p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>대출기간</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>근로자: 3년, 5년</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>상환방법 및 이자부과시기</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>원리금균등분할상환</p></li>
                                    <li><p>이자부과시기: 매월후취</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>중도상환수수료</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>없음</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>부대비용</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>보증수수료: 서민금융진흥원 보증금액의 연 2.5%</p></li>
                                    <li><p>보증료 우대사항</p></li>
                                    <p className='none-list-p'>1) 저소득청년 (연소득 3,500만원 이하, 만 34세 이하) 0.5%p 인하</p>
                                    <p className='none-list-p'>2) 기타 (신용 부채관리 컨설팅 이수자, 금융교육 이수자) 0.1%p 인하</p>
                                    <p className='none-list-p'>※ 신용부채관리 컨설팅 금융교육 이수자: '21.7.26. 신규 신청접수분부터 신청일 이전 1년 이내
                                        <br /><span className='indent-one'>서민금융진흥원에서 해당교육 이수한 경우</span></p>
                                    <li><p>보증료인하: 대출금리가 연 10.5%를 초과한 경우, 동 초과분 (대출금리-10.5%)의 60%에 해당하는
                                        <br /><span id='indent-gua'>만큼의 보증료율 인하적용</span></p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-title'>
                                <span>연체금리</span><hr />
                            </div>
                            <div className='main-guarantee-text-detail'>
                                <ul>
                                    <li><p>대출금리 + 3% 이내 (연체가산 이자율), 최대 15% 이내</p></li>
                                </ul>
                            </div>
                            <div className='main-guarantee-text-info'>
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
