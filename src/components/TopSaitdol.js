import React from 'react'
import '../css/topproduct.css'
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

export default function TopSaitdol() {
    const location = useLocation();

    const currentParams = location.search;
    const totalCheck = () => {
        window.location.href = `https://webloan.ibksb.co.kr/?AD_NO=AD0017&AGENT_ID=SL002&RECOMMENDER=Y?adf_cd=40${currentParams}`;
    }
    const navigate = useNavigate();
    const navigateToIntegrate = () => {
      navigate('/ibk/landing/integrate')
    }
    return (
        <div id='top-product-body'>
            <div id='top-product-container'>
                <div id='top-prev-button' onClick={navigateToIntegrate}>
                    <FaArrowLeft />
                </div>
                <div id='top-product-subtitle'>중·저신용 거래자를 위한 정부지원대출</div>
                <div id='top-product-title'>사잇돌2</div>
                <div id='top-product-list'>
                    <p>
                        <img src={require('../img/liststyle.png')}></img>
                        연 12%대 ~ 연 17%대
                    </p>
                    <p>
                        <img src={require('../img/liststyle.png')}></img>
                        최대 3,000만원
                    </p>
                    <p>
                        <img src={require('../img/liststyle.png')}></img>
                        최장 5년까지
                    </p>
                </div>
                <div id='top-product-shortcut' onClick={totalCheck}>
                    <img src={require('../img/바로가기모바일.png')}></img>
                </div>
            </div>
        </div>
    )
}
