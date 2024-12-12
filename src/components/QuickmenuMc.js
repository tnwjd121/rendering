import React, { useState } from 'react'
import '../css/quickmenu.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { LuChevronDown } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { useIsMoblie } from '../hooks/useIsMoblie';

export default function QuickmenuMc() {
  const navigate = useNavigate();
  const isMobile = useIsMoblie();
  const location = useLocation();

  const currentParams = location.search;
  const enroll = () => {
    window.location.href = `https://sbloan.ibksb.co.kr/ibk/loan_form/loan_step00.jsp${currentParams}`
  }
  const deposit = () => {
    window.location.href = `https://www.ibksb.co.kr/deposit${currentParams}`
  }
  const enrollM = () => {
    window.location.href = `https://sbloan.ibksb.co.kr/ibk/m/loan_form/loan_step00.jsp${currentParams}`
  }
  const depositM = () => {
    window.location.href = `https://www.ibksb.co.kr/m/deposit${currentParams}`
  }
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => {
    setIsDeleted(true);
  };

  const navigateToCredit = () => {
    navigate('/ibk/landing/credit')
  }
  const navigateToGuarantee = () => {
    navigate('/ibk/landing/guarantee')
  }

  if (isDeleted) {
    return null;
  }

  return (
    <div>
      <div id='quick-menu-body'>
        <div id='quick-menu-list'>
          {isMobile ? null : (
            <div id='quick-menu-product'>
              <p>IBKSB Quick</p>
            </div>
          )}
          <div id='quick-menu' onClick={navigateToCredit}>
            <img src={require('../img/신용대출아이콘.png')}></img>
            <p>신용대출</p>
          </div>
          <div id='quick-menu' onClick={navigateToGuarantee}>
            <img src={require('../img/햇살론아이콘.png')}></img>
            <p>햇살론<br />사잇돌2</p>
          </div>
          {isMobile ? (
            <div id='quick-menu-sb-total' onClick={depositM}>
              <img src={require('../img/예적금아이콘.png')}></img>
              <p>예적금<br />정보</p>
            </div>
          ) : (
            <div id='quick-menu-sb-total' onClick={deposit}>
              <img src={require('../img/예적금아이콘.png')}></img>
              <p>예적금<br />정보</p>
            </div>
          )}
          {isMobile ? (
            <div id='quick-menu-sb-pf' onClick={enrollM}>
              <img src={require('../img/손아이콘.png')}></img>
              <p>IBKSB<br /><span id='color-yellow'>통합대출신청</span></p>
            </div>
          ) : (
            <div id='quick-menu-sb-pf' onClick={enroll}>
              <img src={require('../img/손아이콘.png')}></img>
              <p>IBKSB<br /><span id='color-yellow'>통합<br />대출신청</span></p>
            </div>
          )}
        </div>
        {isMobile ? null : (
          <div id='quick-delete-button' onClick={handleDelete}>
            <p><MdOutlineClose /></p>
          </div>
        )}
      </div>
    </div>
  )
}
