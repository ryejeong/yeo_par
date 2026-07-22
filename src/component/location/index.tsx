import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <b>지하철 안내</b>
            <br />
            → 셔틀버스 운행(15분 간격)
            <br />
            → 1호선 동인천역 지하상가 5번 출구<br />&nbsp;&nbsp;&nbsp;횡단보도 앞 승차
          </div>
          <div />
          <div className="content">
            <b>버스 안내</b>
            <br />
            → 연안아파트 하차
            <br />
            &nbsp;&nbsp;· 간선(파랑): 12, 14, 16-1, 23, 24, 27, 36
            <br />
            &nbsp;&nbsp;· 지선(초록): 1111
            <br />
            → 항운아파트 하차
            <br />
            &nbsp;&nbsp;· 간선(파랑): 12, 13, 16-1, 23, 36, 46
            <br />
            &nbsp;&nbsp;· 좌석: 330
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용(주차 2시간 지원)</div>
          <div />
          <div className="content">
            <b>"엘마리노 앳 인천"</b> 또는 <b>"서해대로 227"</b> 검색
            <br />
          </div>
          <div />
          <div className="content">
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
