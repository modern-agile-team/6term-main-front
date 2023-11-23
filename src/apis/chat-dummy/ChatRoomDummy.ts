export interface ChatRoom {
  roomId: string;
  guestId: number;
  guestName: string;
  guestImage: string;
  prevText: string;
  createdAt: string;
}

export const ChatRoomDummy = [
  {
    roomId: '1',
    guestId: 1,
    guestName: '이재진',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText: '형 뭐해요',
    createdAt: '12:24',
  },
  {
    roomId: '2',
    guestId: 2,
    guestName: '이승우',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText: '담배 한대 피시겠습니까',
    createdAt: '17:36',
  },
  {
    roomId: '3',
    guestId: 3,
    guestName: '박준혁',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText: '형 API 요청 확인좀요',
    createdAt: '09:24',
  },
  {
    roomId: '4',
    guestId: 4,
    guestName: '정비호',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText: '술 ㄱ?',
    createdAt: '20:48',
  },
  {
    roomId: '5',
    guestId: 5,
    guestName: '정효준',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText:
      '저희가 생각해봤는데 기획의도는 어떻고 추가할 기능은 어떻고 여기에 이 효과가 들어갔으면 좋겠고 이 효과엔 이 속성이 쓰여진답니다. 가능할까요? 불가능해도 일단 해주세요 저희도 결과물을 보고싶네요 꼭이요',
    createdAt: '08:27',
  },
  {
    roomId: '6',
    guestId: 6,
    guestName: '송치욱',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText: '그럼 금요일에 뵙는걸로 하겠습니다.',
    createdAt: '11:50',
  },
  {
    roomId: '7',
    guestId: 7,
    guestName: '정현민',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText: '현재 info 페이지 디자인 중입니다.',
    createdAt: '14:24',
  },
  {
    roomId: '8',
    guestId: 8,
    guestName: '알수없음',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText: '뭐라고 말하는지 알수가 없어',
    createdAt: '10:34',
  },
  {
    roomId: '9',
    guestId: 9,
    guestName: '알수있음',
    guestImage:
      'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    prevText: '뭐라고 말하는지 알수가 있어',
    createdAt: '01:12',
  },
];
