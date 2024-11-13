import React from 'react'
import '../css/mainmicro.css'
export default function MainMicro() {
  return (
    <div id='main-micro-body'>
        <div id='main-micro-product'>
            <div className='main-micro-title'>
                <div className='main-micro-maintitle'>
                    <img src={require('../img/1.png')} alt='first'/>
                    햇살론 특례보증
                </div>
            </div>
            <div className='main-micro-text'>
                <div className='main-micro-text-title'>
                    <span>가입대상</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <p>개인사업자 중</p>
                    <ul>
                        <li><p>1. 저신용 자영업자 : 개인신용평점 744점 이하</p></li>
                        <li><p>2. 저소득 자영업자 : 연간소득 3,500만원 이하</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출한도</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>운영자금 : 최소400만원 ~ 최대2,000만원 </p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출금리</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li>
                            <p>연 6%대 (변동금리 3, 6, 12개월)</p>
                            <p>※ 대출금리 : 변경금리=조달금리+2.5%p</p>
                            <p>   조달금리 : 현재 매월 금감원을 통해 통지하는 방법으로 동일적용</p>
                            <p>   (전전월의 1년만기 정기예금 신규취급 가중평균금리)</p>
                            <p>   가산금리 : 2.5%p</p>
                            <p>※ 단, 대출금리 최대 상한은 10.5%로 제한유지</p>
                        </li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출기간</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>1년 거치 4년</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>상환방법 및 이자부과시기</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>원리금균등분할상환</p></li>
                        <li><p>이자부과시기 : 매월후취</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>중도상환수수료</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li>
                            <p>없음</p>
                        </li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>부대비용</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>보증료 : 보증금액의 연0.8% (지역 신용보증재단) </p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>연체율</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>대출금리 + 3% 이내(연체가산 이자율), 최대 15% 이내</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-info'>
                    <p>IBK저축은행 준법감시인심의필 2024-00호(2024.00.00.~2025.00.00.)</p>
                    <p>저축은행중앙회심의필 제2024-00000호(2024.00.00.~2025.00.00.)</p>
                </div>
            </div>
      </div>
        <div id='main-micro-product'>
            <div className='main-micro-title'>
                <div className='main-micro-maintitle'>
                    <img src={require('../img/2.png')} alt='second'/>
                    아파트 담보대출
                </div>
            </div>
            <div className='main-micro-text'>
                <div className='main-micro-text-title'>
                    <span>가입대상</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                    <li><p>개입사업자 중, 개인신용평점 725~1,000점 범위에 속하는 자</p></li>
                        <li><p>사업개시일로부터 3개월 이상인자</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출한도</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>최대 10억원 (KB부동산시세) </p></li>
                        <li><p>LTV 최대90%이내 </p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출금리</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>연 5%대 ~ 9%대 (신용평점 및 LTV별 차등적용)</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출기간</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>운영자금 최대 3년</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>상환방법 및 이자부과시기</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>만기일시 or 분할상환</p></li>
                        <li><p>이자부과시기 : 매월후취</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>중도상환수수료</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li>
                            <p>상환금액의 연2%이내</p>
                            <p>※기한 전 상환 대출금액X기한 전 상환수수료율X대출잔여일÷대출기간</p>
                        </li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>부대비용</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>인지비용 : 5천만원 초과시 대출금액별 수입인지비용 차등부과 (고객, 저축은행 각 50%씩 부담)</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>연체율</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>대출금리 + 3% 이내(연체가산 이자율), 최대 20% 이내</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-info'>
                    <p>IBK저축은행 준법감시인심의필 2024-00호(2024.00.00.~2025.00.00.)</p>
                    <p>저축은행중앙회심의필 제2024-00000호(2024.00.00.~2025.00.00.)</p>
                </div>
            </div>
      </div>
        <div id='main-micro-product'>
            <div className='main-micro-title'>
                <div className='main-micro-maintitle'>
                    <img src={require('../img/3.png')} alt='third'/>
                    신용대출
                </div>
            </div>
            <div className='main-micro-text'>
                <div className='main-micro-text-title'>
                    <span>가입대상</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>신용대출을 필요로 하는 소상공인 중</p></li>
                        <li><p>개인신용평점 665점~1,000점에 속하는 자</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출한도</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>최대 2,000만원 </p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출금리</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li>
                            <p>연 7%대 ~ 13%대 (신용평점별 차등적용)</p>
                        </li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출기간</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>최대 5년이내</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>상환방법 및 이자부과시기</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>원리금균등분할상환</p></li>
                        <li><p>이자부과시기 : 매월후취</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>중도상환수수료</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li>
                            <p>상환금액의 연2%이내</p>
                            <p>※기한 전 상환 대출금액X기한 전 상환수수료율X대출잔여일÷대출기간</p>
                        </li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>부대비용</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>없음 </p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>연체율</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>대출금리 + 3% 이내(연체가산 이자율), 최대 20% 이내</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-info'>
                    <p>IBK저축은행 준법감시인심의필 2024-00호(2024.00.00.~2025.00.00.)</p>
                    <p>저축은행중앙회심의필 제2024-00000호(2024.00.00.~2025.00.00.)</p>
                </div>
            </div>
      </div>
        <div id='main-micro-product'>
            <div className='main-micro-title'>
                <div className='main-micro-maintitle'>
                    <img src={require('../img/4.png')} alt='four'/>
                    부동산 담보대출
                </div>
            </div>
            <div className='main-micro-text'>
                <div className='main-micro-text-title'>
                    <span>가입대상</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>부동산 담보제공(부동산 개발 및 아파트 담보대출 제외) 가능한 소상공인 중</p></li>
                        <li><p>개인신용평점 665점~1,000점에 속하는 자</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출한도</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>최대 5억원 </p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출금리</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li>
                            <p>연 7%대 ~ 13%대 (신용평점별 차등적용)</p>
                        </li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>대출기간</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>최대 5년 이내
                            </p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>상환방법 및 이자부과시기</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>만기일시 or 분할상환</p></li>
                        <li><p>이자부과시기 : 매월후취</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>중도상환수수료</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li>
                            <p>상환금액의 연 2% 이내</p>
                            <p>※기한 전 상환 대출금액X기한 전 상환수수료율X대출잔여일÷대출기간</p>
                        </li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>부대비용</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>인지비용 : 5천만원 초과시 대출금액별 수입인지비용 차등부과(고객, 저축은행 각 50%씩 부담) </p></li>
                    </ul>
                </div>
                <div className='main-micro-text-title'>
                    <span>연체율</span><hr/>
                </div>
                <div className='main-micro-text-detail'>
                    <ul>
                        <li><p>대출금리 + 3% 이내(연체가산 이자율), 최대 20% 이내</p></li>
                    </ul>
                </div>
                <div className='main-micro-text-info'>
                    <p>IBK저축은행 준법감시인심의필 2024-00호(2024.00.00.~2025.00.00.)</p>
                    <p>저축은행중앙회심의필 제2024-00000호(2024.00.00.~2025.00.00.)</p>
                </div>
            </div>
      </div>
    </div>
  )
}
