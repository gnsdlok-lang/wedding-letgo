import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-05-03 11:00", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [5,25]

export const LOCATION = "라도무스 아트센터 웨딩홀, 8층 루미니스홀"
export const LOCATION_ADDRESS = "대전광역시 유성구 동서대로 639"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [127.333591, 36.333002]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 37638309

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 27596552

export const BRIDE_FULLNAME = "신수빈"
export const BRIDE_FIRSTNAME = "수빈"
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = "신경선"
export const BRIDE_MOTHER = "허란정"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-8745-3371",
    account: "농협 3028745337131",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-7735-3371",
    account: "우리 26001192202101",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-2369-3138",
    account: "국민 71240201039520",
  },
]

export const GROOM_FULLNAME = "김세훈"
export const GROOM_FIRSTNAME = "세훈"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "김종태"
export const GROOM_MOTHER = "추교순"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-7355-1502",
    account: "농협 3020981723161",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-3484-1502",
    account: "농협 17717952133728",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-9802-1502",
    account: "농협 17717952035847",
  },
]
