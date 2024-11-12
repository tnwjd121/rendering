import React from 'react'
import '../css/quickmenu.css'

export default function Quickmenu() {
  return (
    <div id='test'>
      <div id='quick-menu-body'>
        <div id='quick-delete-button'>
            <p>X</p>
        </div>
        <div id='quick-menu-list'>
            <div id='quick-menu-product'>
                <img src={require('../img/상품정보바로가기아이콘.png')}></img>
                <p>상품정보<br/>바로가기</p>
                <p><span id='quick-icon'>v</span></p>
                {/*  */}
            </div>
            <div id='quick-menu-credit'>
                <img src={require('../img/신용대출바로가기아이콘.png')}></img>
                <p>신용대출</p>
            </div>
            <div id='quick-menu-micro'>
                <img src={require('../img/소상공인바로가기아이콘.png')}></img>
                <p>소상공인<br/>4종대출</p>
            </div>
            <div id='quick-menu-sb-total'>
                <img src={require('../img/통합대출바로가기아이콘.png')}></img>
                <p>IBKSB<br/>통합 대출신청</p>
            </div>
            <div id='quick-menu-sb-pf'>
                <img src={require('../img/예적금바로가기아이콘.png')}></img>
                <p>IBKSB<br/>예적금정보</p>
            </div>
        </div>
      </div>
    </div>
  )
}
