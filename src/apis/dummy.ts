//boardId로 요청보내서 get 받아오기
export const commentDummy = [
  {
    commentId: 1,
    content: '댓글내용입니다.1',
    commentOwner: false,
    userId: {
      name: '이재진',
      userImage: {
        id: 13,
        userId: 63,
        imageUrl:
          'https://phinf.pstatic.net/contact/20230313_71/1678704142906wkazc_JPEG/E2B77116-D2F9-4CCC-A177-A357FF611682.jpg',
      },
    },
  },
  {
    commentId: 2,
    content: '댓글내용입니다.2',
    commentOwner: true,
    userId: {
      name: '이재진',
      userImage: {
        id: 13,
        userId: 63,
        imageUrl:
          'https://phinf.pstatic.net/contact/20230313_71/1678704142906wkazc_JPEG/E2B77116-D2F9-4CCC-A177-A357FF611682.jpg',
      },
    },
  },
];

//commentId로 요청보내서 get받아오기
export const reCommentDummy = {
  reCommentId: 1,
  reCommentCount: 2,
  reComment: [
    {
      reComment: '대댓글1',
      reCommentOwner: true,
      userId: {
        name: '이재진',
        userImage: {
          id: 13,
          userId: 63,
          imageUrl:
            'https://phinf.pstatic.net/contact/20230313_71/1678704142906wkazc_JPEG/E2B77116-D2F9-4CCC-A177-A357FF611682.jpg',
        },
      },
    },
    {
      reComment: '대댓글2',
      reCommentOwner: true,
      userId: {
        name: '이재진',
        userImage: {
          id: 13,
          userId: 63,
          imageUrl:
            'https://phinf.pstatic.net/contact/20230313_71/1678704142906wkazc_JPEG/E2B77116-D2F9-4CCC-A177-A357FF611682.jpg',
        },
      },
    },
  ],
};
