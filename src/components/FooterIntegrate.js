import React from 'react'
import '../css/footerintegrate.css';
export default function FooterIntegrate() {
    const integrateProduct = () => {
        window.location.href = 'https://sbloan.ibksb.co.kr/ibk/m/loan_form/loan_step00.jsp';
    }

  return (
    <footer>
      <div id='footer1-inte'>
        <div id='footer1-inte-body'>
            <div id='footer1-inte-container'>
                <div id='footer1-inte-title'>
                    <p>유의사항</p>
                    <img src={require('../img/footer화살표.png')} alt='화살표'></img>
                </div>
                <hr/>
                <div id='footer1-inte-text'>   
                    <p>- 과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다.</p>
                    <p>- 개인신용평점 하락으로 금융거래의 제약 또는 불이익이 발생할 수 있습니다.</p>
                    <p>- 연체 시 계약기한 만료 전 원리금 변제 의무가 발생할 수 있습니다.</p>
                    <p>- 계약 체결 전 상품설명서 및 약관을 확인하시기 바랍니다.</p>
                    <p>- 해당 상품에 대해 충분한 사전 설명을 받을 권리가 있으며, 설명을 이해한 후 거래하시기 바랍니다.</p>
                </div>
            </div>
            <div id='footer1-inte-container'>
                <div id='footer1-inte-title'>
                    <p>발생가능한 불이익 안내</p>
                    <img src={require('../img/footer화살표.png')} alt='화살표'></img>
                </div>
                <hr/>
                <div id='footer1-inte-text'>   
                    <p>- 과도한 대출은 개인신용평점 하락의 원인이 될 수 있습니다.</p>
                    <p>- 개인신용평점 하락으로 금융거래의 제약 또는 불이익이 발생할 수 있습니다.</p>
                    <p>- 연체 시 계약기한 만료 전 원리금 변제 의무가 발생할 수 있습니다.</p>
                    <p>- 계약 체결 전 상품설명서 및 약관을 확인하시기 바랍니다.</p>
                    <p>- 해당 상품에 대해 충분한 사전 설명을 받을 권리가 있으며, 설명을 이해한 후 거래하시기 바랍니다.</p>
                </div>
            </div>
        </div>
      </div>
      <div id='footer2-inte'>
        <div id='footer2-inte-body'>
            <div id='footer2-inte-container'>
                <p>대출상품문의안내 (평일 오전 9시~오후6시까지)</p>
                <p id='call-number'>대표번호 1522-7900</p>
                <div id='footer2-inte-box' onClick={integrateProduct}>
                    <p id='footer2-inte-box-text1'>다른 대출상품이 궁금하시다면?</p>
                    <p id='footer2-inte-box-text2'>통합 인터넷대출 바로가기</p>
                </div>
            </div>
        </div>
      </div>
      <div id='footer3-inte'>
        <div id='footer3-inte-body'>
            <div className='footer3-inte-img'>
                {/* 이미지 색상 변경 필요 */}
                <img src={require('../img/IBK로고.png')} alt='IBK Logo'/>
            </div>
            <div className='footer3-inte-text'>
                <ul>
                    <li><p>부산광역시 부산진구 중앙대로 735 4층(부전동260-4)(우:47254)</p></li>
                    <li><p>대표번호 : 1522-7900(평일 오전 9시 ~ 오후6시 까지)</p></li>
                    <li><p>Copyright IBK저축은행 ALL Right Reserved.</p></li>
                </ul>
            </div>
        </div>
      </div>  
    </footer>
  )
}
