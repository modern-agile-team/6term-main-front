import * as S from './styled';
import { useEffect, useState, useCallback, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { SelectBoardAtom } from '@/recoil/atoms/UserPostsAtom';
import CustomSelect from '@/components/molecules/post-board/BoardSelect';
import BOARDS from '@/apis/boards';
import { useRouter } from 'next/router';
import PreviewImg from './PreviewImg';

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];

export interface IFileTypes {
  id?: number; // 파일들의 고유값 id
  object?: File;
  url?: string;
}

const PostCreate = () => {
  const [unitTitle, setUnitTitle] = useState<string>(''); //제목
  const [quillText, setQuillText] = useState<string>(''); //본문
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const getBoard = useRecoilValue(SelectBoardAtom); //boardSelect
  const router = useRouter();
  const resetSelect = useResetRecoilState(SelectBoardAtom);
  const fileId = useRef<number>(0);

  /**이미지 추가 핸들러 */
  const onChangeFiles = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: IFileTypes[] = files;
      // temp 변수를 이용하여 선택했던 파일들을 담습니다.

      // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게
      if (e.type === 'drop') {
        // 드래그 앤 드롭 했을때
        selectFiles = e.dataTransfer.files; //나중에 로직 추가
      } else {
        selectFiles = e.target.files;
        // "파일 첨부" 버튼을 눌러서 이미지를 선택했을때
      }

      for (const file of selectFiles) {
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++, // fileId의 값을 1씩 늘려주면서 각 파일의 고유값
            object: file, // object 객체안에 선택했던 파일들의 정보가 담겨있습니다.
            url: URL.createObjectURL(file),
          },
        ];
      }

      setFiles(tempFiles);
    },
    [files],
  ); // 위에서 선언했던 files state 배열을 deps에 넣어줍니다.

  /** 이미지 삭제 핸들러 */
  const handleFilterFile = useCallback(
    (id: number): void => {
      setFiles(files.filter((file: IFileTypes) => file.id !== id));
    },
    [files],
  );

  //다른 페이지로 넘어가도 select초기화
  useEffect(() => {
    router.events.on('routeChangeStart', resetSelect);
    return () => {
      router.events.off('routeChangeStart', resetSelect);
    };
  }, []);

  /**업로드 버튼 핸들링 */
  const handleSubmit = async () => {
    const formData = new FormData();
    files.map((data) => {
      formData.append('files', data.object as File);
    });
    if (confirm('업로드하시겠습니까?')) {
      if (getBoard.sub === '' || unitTitle === '' || quillText === '') {
        if (getBoard.sub === '') alert('카테고리를 선택해주세요.');
        if (unitTitle === '') alert('제목을 입력해주세요.');
        if (quillText === '') alert('본문내용을 입력해주세요.');
      } else {
        const isData = {
          head: unitTitle,
          body: quillText,
          main_category: getBoard.main,
          sub_category: getBoard.sub,
        };
        const data = await BOARDS.createPost(isData);
        if (files[0] !== null) {
          await BOARDS.createImg(formData, data.data.id);
        }
        //router => 해당 글 로 페이지 이동
        router.push({
          pathname: `/post/unit/${data.data.id}`,
          query: {
            boardId: data.data.id,
          },
        });
        resetSelect(); //게시글 카테고리 초기화
      }
    }
  };

  return (
    <S.CreatPostContainer>
      <div>
        <S.CreatePostTitle>
          <S.FontSize>제목</S.FontSize>
          <S.InputBox
            type="text"
            value={unitTitle}
            placeholder="제목입력"
            onChange={(e: any) => {
              setUnitTitle(e.target.value);
            }}></S.InputBox>
        </S.CreatePostTitle>
        <div>
          <S.FlexBox direction="row">
            <S.FontSize>본문</S.FontSize>
            {/* 게시판 선택 */}
            <CustomSelect />
          </S.FlexBox>
          <S.CreatePostBody>
            <QuillWrapper
              value={quillText}
              theme="snow"
              modules={modules}
              formats={formats}
              placeholder="글을 작성해 주세요."
              onChange={(e: any) => setQuillText(e)}
              style={{ height: 400 }}
            />
          </S.CreatePostBody>
        </div>
        <div>
          <S.FontSize>사진</S.FontSize>
          <S.AddImageContainer>
            <div>
              <input type="file" id="fileUpload" onChange={onChangeFiles} />
            </div>
            <S.FlexBox>
              {files.length > 0 &&
                files.map((file: IFileTypes) => {
                  const { id, url } = file;
                  return (
                    <S.PreviewContainer key={id}>
                      <div onClick={() => handleFilterFile(id as number)}>
                        X
                      </div>
                      <PreviewImg url={url} />
                    </S.PreviewContainer>
                  );
                })}
            </S.FlexBox>
          </S.AddImageContainer>
        </div>
        <S.FlexBox side="25px 0px 10px 0px">
          <S.ButtonUI onClick={handleSubmit}>올리기</S.ButtonUI>
        </S.FlexBox>
      </div>
    </S.CreatPostContainer>
  );
};

export default PostCreate;
