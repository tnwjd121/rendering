import React from 'react'
import '../css/topintegrate.css'

export default function TopIntegrate({scrollToSection, onToggleMainIntegrate}) {
  return (
    <div>
      <div id='top-integrate-body'>
        <div id='top-integrate-container'>
            <div id='top-integrate-subtitle'>
              <img src={require('../img/원스톱소제목.png')}></img>
            </div>
            <div id='top-integrate-title'>
              <img src={require('../img/원스톱한도조회.png')}></img>
            </div>
            <div id='top-integrate-text'>
              <p>
                <span className='color-blue'>신용평점에 영향없이 3가지 대출상품</span>을 한번에 조회!<br/>
                나에게 맞는 <span>대출상품을 다이렉트로 신청</span>!!
              </p>
            </div>
            <div id='top-integrate-shortcut'>
              <img src={require('../img/바로가기버튼.png')}></img>
            </div>
            <div id='top-integrate-product-list'>
              <div className='top-integrate-text' onClick={() => scrollToSection('biglone')}>
                <div className='top-integrate-text-top'>
                  <div className='top-integrate-text-top-left'>
                    <div className='top-integrate-text-subtitle'>직장인을 위한<br/>IBKSB신용대출</div>
                    <div className='top-integrate-text-title'>i-빅론U</div>
                  </div>
                  <div className='top-integrate-text-top-right'>                    
                    <div className='top-integrate-text-button'>></div>
                    <div className='top-integrate-text-img'>
                      <img src={require('../img/빅론.png')}></img>
                    </div>
                  </div>
                </div> 
                <div className='top-integrate-text-bottom'>
                  <div className='top-integrate-text-bottom-text'>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      연11% ~ 연 19%대
                    </p>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      최저 500만원 ~ 최대 6,000만원
                    </p>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      최소 1년 ~ 최장 5년까지
                    </p>
                  </div>
                </div> 
              </div>
              <div className='top-integrate-text'>
                <div className='top-integrate-text-top' onClick={() => scrollToSection('saitdol')}>
                  <div className='top-integrate-text-top-left'>
                    <div className='top-integrate-text-subtitle'>중저신용 거래자를 위한<br/>정부지원대출</div>
                    <div className='top-integrate-text-title'>사잇돌2</div>
                  </div>
                  <div className='top-integrate-text-top-right'>                    
                    <div className='top-integrate-text-button'>></div>
                    <div className='top-integrate-text-img'>
                      <img src={require('../img/사잇돌.png')}></img>
                    </div>
                  </div>
                </div> 
                <div className='top-integrate-text-bottom'>
                  <div className='top-integrate-text-bottom-text'>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      연12% ~ 연 17%대
                    </p>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      최대 3,000만원
                    </p>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      최장 5년까지 (보증기간 이내)
                    </p>
                  </div>
                </div> 
              </div>
              <div className='top-integrate-text'>
                <div className='top-integrate-text-top' onClick={() => scrollToSection('online')}>
                  <div className='top-integrate-text-top-left'>
                    <div className='top-integrate-text-subtitle'>중저신용 거래자를 위한<br/>정부지원대출</div>
                    <div className='top-integrate-text-title'>온라인햇살론</div>
                  </div>
                  <div className='top-integrate-text-top-right'>                    
                    <div className='top-integrate-text-button'>></div>
                    <div className='top-integrate-text-img2'>
                      <img src={require('../img/햇살론.png')}></img>
                    </div>
                  </div>
                </div> 
                <div className='top-integrate-text-bottom'>
                  <div className='top-integrate-text-bottom-text'>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      연11% ~ 연 19%대
                    </p>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      최저 500만원 ~ 최대 6,000만원
                    </p>
                    <p>
                      <img src={require('../img/liststyle.png')}></img>
                      최소 1년 ~ 최장 5년까지
                    </p>
                  </div>
                </div> 
              </div>
            </div>
        </div>
      </div>
        <div id='top-intergrate-detail' onClick={onToggleMainIntegrate}>
          <p><span id='loanproduct'>대출상품정보</span> 자세히 보기 
          <span id='detail-integrate'>
            <img src={require('../img/footer화살표.png')}>
            </img>
          </span>
          </p>
        </div> 
    </div>
  )
}
