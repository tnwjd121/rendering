import React from 'react'
import '../css/footer.css';
import { useIsMoblie } from '../hooks/useIsMoblie';


export default function Footer() {
    const isMobile = useIsMoblie();
  return (
    <footer>
        {isMobile ? (
        <div>
            <div id='footer1'>
                <table id='note'>
                    <tr>
                        <td className='note-title'>
                            <p>※ 유의사항</p>
                        </td>
                        <td>
                            <ul>
                                <li><p>과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다. </p></li>
                                <li><p>개인신용평점 하락으로 금융거래의 제약 또는 불이익이<br/> 발생할 수 있습니다. </p></li>
                                <li><p>연체 시 계약기간 만료 전 원리금 변제 의무가 발생할 수<br/> 있습니다. </p></li>
                                <li><p>계약 체결 전 상품설명서 및 약관을 확인하시기 바랍니다. </p></li>
                                <li><p>해당 상품에 대한 충분한 사전 설명을 받을 권리가 있으며,<br/> 설명을 이해한 후 거래하시기 바랍니다. </p></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className='note-title'>
                            <p>※ 발생 가능한 <br/><span className='indent-title'>불이익 안내</span></p>
                        </td>
                        <td>
                            <ul>
                                <li><p>신용평점 및 구간에 따라 신용원가율이 가산 될 수 있습니다. </p></li>
                                <li><p>기준금리 변동에 따라 대출금리가 변경될 수 있습니다.</p></li>
                                <li><p>신용점수 또는 당사 대출규정에 의거 결격사유가 있는 경우<br/> 대출이 제한됩니다. </p></li>
                                <li><p>대츌금 상환 지연시 예금 등 기타채권과의 상계나<br/> 법적절차진행 등으로 재산상의 불이익을 받을 수 있습니다. </p></li>
                            </ul>
                        </td>
                    </tr>
                    <tr >
                        <td className='note-title'>
                            <p>※ 고객권리사항</p>
                        </td>
                        <td>
                            <ul>
                                <li><p>개인신용평가 결과에 따라 대출금리를 산정한 가계대출에<br/> 대하여, 채무자 본인의 신용등급 상승 시 (소득증가, 자산증가,<br/> 부채감소, 신용점수 상승 등) 금리인하를 요구할 수 있으며 <br/>필요시 증빙자료를 제출해야 합니다. </p></li>
                                <li><p>단, 내부정책 또는 신용평가 결과에 따라 금리인하가 되지 않을<br/> 수 있습니다.</p></li>
                                <li><p>본 상품은 [금융소비자 보호에 관한 법률 제 46조] 및 관련 <br/>규정이 정하는 바에 따라 인터넷뱅킹, 서면, 전화를 통해<br/> 대출계약의 철회가 가능한 상품입니다. </p></li>
                                <br/>
                                <li><p>청약철회권, 금리인하요구권, 자료열람요구권,위법계약해지권,<br/> 개인신용평가대응권<br/>
                                    : 해당내용 상품설명서 상세내용 참조
                                </p></li>
                                <li><p>민원처리 및 분쟁조정 절차안내<br/>
                                ※ 상품가입 후 문의사항 또는 민원이 있을 경우 <br/>고객센터 (☎1522-7900)또는 홈페이지 (www.ibksb.co.kr)<br/>를 통해 문의할 수 있습니다.<br/>
                                ※ 분쟁이 발생한 경우에는 금융감독원 (국번없이 ☎1322)등에 도움을 요청할 수 있습니다.
                                </p></li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
            <div id='footer2'>
                <div id='footer2-body'>
                    <div className='footer2-text'>
                        <ul>
                            <li><p>부산광역시 부산진구 중앙대로 735 4층 (부전동260-4) (우:47254)</p></li>
                            <li><p>대표번호 : 1522-7900 (평일 오전 9시 ~ 오후6시 까지)</p></li>
                            <li><p>Copyright IBK저축은행 ALL Right Reserved.</p></li>
                        </ul>
                    </div>
                    <div className='footer2-img'>
                        <img src={require ('../img/IBK그레이로고.png')} alt='IBK Logo'/>
                    </div>
                </div>
            </div>    
        </div>
        ): (
        <div>
            <div id='footer1'>
                <table id='note'>
                    <tr>
                        <td className='note-title'>
                            <p>※ 유의사항</p>
                        </td>
                        <td>
                            <ul>
                                <li><p>과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다. </p></li>
                                <li><p>개인신용평점 하락으로 금융거래의 제약 또는 불이익이 발생할 수 있습니다. </p></li>
                                <li><p>연체 시 계약기간 만료 전 원리금 변제 의무가 발생할 수 있습니다. </p></li>
                                <li><p>계약 체결 전 상품설명서 및 약관을 확인하시기 바랍니다. </p></li>
                                <li><p>해당 상품에 대한 충분한 사전 설명을 받을 권리가 있으며, 설명을 이해한 후 거래하시기 바랍니다. </p></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className='note-title'>
                            <p>※ 발생 가능한 <br/><span className='indent-title'>불이익 안내</span></p>
                        </td>
                        <td>
                            <ul>
                                <li><p>신용평점 및 구간에 따라 신용원가율이 가산 될 수 있습니다. </p></li>
                                <li><p>기준금리 변동에 따라 대출금리가 변경될 수 있습니다.</p></li>
                                <li><p>신용점수 또는 당사 대출규정에 의거 결격사유가 있는 경우 대출이 제한됩니다. </p></li>
                                <li><p>대츌금 상환 지연시 예금 등 기타채권과의 상계나 법적절차진행 등으로 재산상의 불이익을 받을 수 있습니다. </p></li>
                            </ul>
                        </td>
                    </tr>
                    <tr >
                        <td className='note-title'>
                            <p>※ 고객권리사항</p>
                        </td>
                        <td>
                            <ul>
                                <li><p>개인신용평가 결과에 따라 대출금리를 산정한 가계대출에 대하여, 채무자 본인의 신용등급 상승 시 (소득증가, 자산증가, 부채감소, 신용점수 상승 등) 금리인하를 요구할 수 있으며 필요시 증빙자료를 제출해야 합니다. </p></li>
                                <li><p>단, 내부정책 또는 신용평가 결과에 따라 금리인하가 되지 않을 수 있습니다.</p></li>
                                <li><p>본 상품은 [금융소비자 보호에 관한 법률 제 46조] 및 관련 규정이 정하는 바에 따라 인터넷뱅킹, 서면, 전화를 통해 대출계약의 철회가 가능한 상품입니다. </p></li>
                                <br/>
                                <li><p>청약철회권, 금리인하요구권, 자료열람요구권, 위법계약해지권, 개인신용평가대응권<br/>
                                    : 해당내용 상품설명서 상세내용 참조
                                </p></li>
                                <li><p>민원처리 및 분쟁조정 절차안내<br/>
                                : 상품가입 후 문의사항 또는 민원이 있을 경우 고객센터 (☎1522-7900)또는 <br/>
                                <span className='indent-text'>홈페이지 (www.ibksb.co.kr)통해 문의할 수 있습니다.</span><br/>
                                : 분쟁이 발생한 경우에는 금융감독원 (국번없이 ☎1322)등에 도움을 요청할 수 있습니다.
                                </p></li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
            <div id='footer2'>
                <div id='footer2-body'>
                    <div className='footer2-img'>
                        <img src={require ('../img/IBK그레이로고.png')} alt='IBK Logo'/>
                    </div>
                    <div className='footer2-text'>
                        <ul>
                            <li><p>부산광역시 부산진구 중앙대로 735 4층 (부전동260-4) (우:47254)</p></li>
                            <li><p>대표번호 : 1522-7900 (평일 오전 9시 ~ 오후6시 까지)</p></li>
                            <li><p>Copyright IBK저축은행 ALL Right Reserved.</p></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
        )}
    </footer>
  )
}
