import React, { useEffect } from 'react'
import TopBiglone from '../components/TopBiglone'
import MainBiglone from '../components/MainBiglone'
import FooterIntegrate from '../components/FooterIntegrate'
import { useNavigate } from 'react-router-dom';

export default function Biglone() {

  //url 주소 설정
  const navigate = useNavigate();
  // 파라미터 주소 넣기
  useEffect(() => {
    const params = new URLSearchParams({
      adf_cd: '25',
      utm_source: 'naver_brand',
      search: '원스톱 빅론',
      n_media: '27758',
      n_query: 'IBK저축은행',
      n_rank: '1',
      n_ad_group: 'grp-a001-04-000000041607267',
      n_ad: 'nad-a001-04-000000330861122',
      n_keyword_id: 'nkw-a001-04-000006153679739',
      n_keyword: 'IBK저축은행',
      n_campaign_type: '4',
      n_contract: 'tct-a001-04-000000001007674',
      n_ad_group_type: '5',
      NaPm: 'ct%3Dm4j7rna8%7Cci%3D0yS00014UPvB0zBmd0XG%7Ctr%3Dbrnd%7Chk%3D81c569647ec1a7de1815160394c74db28732d449%7Cnacn%3DsuQLBYAOOebuB'
    });

    navigate(`/ibk/landing/integrate/biglone?${params.toString()}`);
  }, [navigate]);

  useEffect(() => {
    //url 주소 가져오기
    // const urlAll = 'http://localhost:3000/ibk/landing/guarantee?adf_cd=25&utm_source=naver_brand&search=%EB%B3%B4%EC%A6%9D%EB%B6%80&n_media=27758&n_query=IBK%EC%A0%80%EC%B6%95%EC%9D%80%ED%96%89&n_rank=1&n_ad_group=grp-a001-04-000000041607267&n_ad=nad-a001-04-000000330861122&n_keyword_id=nkw-a001-04-000006153679739&n_keyword=IBK%EC%A0%80%EC%B6%95%EC%9D%80%ED%96%89&n_campaign_type=4&n_contract=tct-a001-04-000000001007674&n_ad_group_type=5&NaPm=ct%253Dm4j7rna8%257Cci%253D0yS00014UPvB0zBmd0XG%257Ctr%253Dbrnd%257Chk%253D81c569647ec1a7de1815160394c74db28732d449%257Cnacn%253DsuQLBYAOOebuB';
    const urlAll = window.location.href;
    const querys = urlAll.split('?')[1];
    const urlMap = querys.split("&").map((param) => {
      const [key, value] = param.split("=");
      return { key, value };
    })
    // console.log(urlMap)
  }, [1000])

  // 가져온 url 파라미터 주소 넣기
  // useEffect(() => {
  //   const params = urlMap
  //   .map(({ key, value }) => `${key}=${value}`)
  //   .join('&');

  //   navigate(`/ibk/landing/guarantee?${params.toString()}`);
  // }, [navigate]);

  return (
    <div>
      <TopBiglone />
      <MainBiglone />
      <FooterIntegrate />
    </div>
  )
}
