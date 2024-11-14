import React, { useState } from 'react'
import '../css/quickmenu.css'

export default function QuickmenuMc() {
    const  enroll = () =>{
        window.location.href ='https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step00.jsp'
      }
      const deposit = () => {
        window.location.href ='https://www.ibksb.co.kr/deposit'
      }
      const [isDeleted, setIsDeleted] = useState(false);
      const handleDelete = () => {
        setIsDeleted(true);
      };
    
      if (isDeleted) {
        return null;
      }
    
      return (
        <div>
          <div id='quick-menu-body'>
            <div id='quick-delete-button' onClick={handleDelete}>
                <p>X</p>
            </div>
            <div id='quick-menu-list'>
                <div id='quick-menu-product'>
                    <img src={require('../img/상품정보바로가기아이콘.png')}></img>
                    <p>상품정보<br/>바로가기</p>
                    <p><span id='quick-icon'>v</span></p>
                </div>
                <div id='quick-menu-gua'>
                    <img src={require('../img/햇살론아이콘.png')}></img>
                    <p>온라인햇살론<br/>사잇돌2</p>
                </div>
                <hr id='quick-line-gray'/>
                <div id='quick-menu-credit-mc'>
                    <img src={require('../img/신용대출바로가기아이콘.png')}></img>
                    <p>신용대출</p>
                </div>
                <div id='quick-menu-sb-total' onClick={enroll}>
                    <img src={require('../img/통합대출바로가기아이콘.png')}></img>
                    <p>IBKSB<br/>통합 대출신청</p>
                </div>
                <hr id='quick-line-white'/>
                <div id='quick-menu-sb-pf' onClick={deposit}>
                    <img src={require('../img/예적금바로가기아이콘.png')}></img>
                    <p>IBKSB<br/>예적금정보</p>
                </div>
            </div>
          </div>
        </div>
      )
}