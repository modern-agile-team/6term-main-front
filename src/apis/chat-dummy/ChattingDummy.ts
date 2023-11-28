export interface ChatMessage {
  roomId: string;
  sender: {
    id: number;
    name: string;
    image: string;
  };
  receiver: {
    id: number;
    name: string;
    image: string;
  };
  content: string;
  createAt: string;
}

export const ChatMessageDummy: ChatMessage[] = [
  {
    roomId: '1',
    sender: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '재진스뉴진스',
    createAt: '09:27',
  },
  {
    roomId: '1',
    sender: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '무슨일이십니까',
    createAt: '09:33',
  },
  {
    roomId: '1',
    sender: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '오류 수정했고',
    createAt: '09:35',
  },
  {
    roomId: '1',
    sender: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '일단 머지도 넣었긴 했는데',
    createAt: '09:35',
  },
  {
    roomId: '1',
    sender: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '아직 완성은 아닌듯혀',
    createAt: '09:35',
  },
  {
    roomId: '1',
    sender: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '아하 네 알겠습니다',
    createAt: '09:37',
  },
  {
    roomId: '1',
    sender: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '확인해보고 코멘트 남기겠슴다',
    createAt: '09:37',
  },
  {
    roomId: '1',
    sender: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '오케잉',
    createAt: '09:41',
  },
  {
    roomId: '1',
    sender: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '확인해봤는데, 이부분을 컨셉적으로 좀 생각해 봐야될 것 같아요',
    createAt: '10:07',
  },
  {
    roomId: '1',
    sender: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '쭉 정리해서 말씀드릴게요',
    createAt: '10:07',
  },
  {
    roomId: '1',
    sender: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content:
      '더미데이터니까 막적을게요 이제 더이상 생각이 안나요 더미데이터 만드는 거 재밌어요 유후 지금 제 친구 테스트 중인데 왜이리 오래 걸리는지 모르겠어요 이렇게신중한 타입이였나 생각이 들기도 하네요 형은 어떻게 생각하세요 아 치킨 먹고 싶다 아 치킨은 진짜 안되지 구운거 말고 튀긴거 먹고 싶다',
    createAt: '10:11',
  },
  {
    roomId: '1',
    sender: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '단단히 돌은게 분명해 우리 둘 다',
    createAt: '10:49',
  },
  {
    roomId: '1',
    sender: {
      id: 1,
      name: '이재진',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    receiver: {
      id: 70,
      name: '원동건',
      image:
        'https://previews.123rf.com/images/blankstock/blankstock2212/blankstock221202347/195565495-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%95%84%EB%B0%94%ED%83%80-%EB%98%90%EB%8A%94-%EC%82%AC%EB%9E%8C-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%84%B8%EB%A1%9C-%EA%B8%B0%ED%98%B8-%EC%A4%91%EB%A6%BD-%EC%84%B1%EB%B3%84-%EC%8B%A4%EB%A3%A8%EC%97%A3-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84%EC%9D%B4-%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%B2%84%ED%8A%BC-%EB%B9%88-%ED%94%84%EB%A1%9C%ED%95%84.jpg',
    },
    content: '형 식사하셨습니까',
    createAt: '12:24',
  },
];
