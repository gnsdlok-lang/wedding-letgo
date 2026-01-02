import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"


export const Location = () => {
  return (
    <>
      {/* 웨딩홀 이름 + 주소 + 지도 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 교통 안내 카드 */}
      <LazyDiv className="card location">
        {/* 대중교통 - 버스 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <b>버스 이용</b>
            <br />
            11, 213, 601, 706번 버스 이용
            <br />
            <b>법원 등기국(아이파크시티 방면)</b> 하차
          </div>
        </div>

        {/* 자가용 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>라도무스 아트센터 웨딩홀</b> 검색
            <br />
            <br />
            <b>- 주차 요금은 무료입니다</b>
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}