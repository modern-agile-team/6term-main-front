import * as S from './styled';
import { BsFillFileEarmarkImageFill } from 'react-icons/bs';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

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

const PostCreate = () => {
  return (
    <S.CreatPostContainer>
      <div>
        <S.CreatePostTitle>
          <S.FontSize>제목</S.FontSize>
          <S.InputBox type="text" placeholder="제목입력"></S.InputBox>
        </S.CreatePostTitle>
        <div>
          <S.FlexBox direction="row" side="5px 0px 5px 0px">
            <S.FontSize>본문</S.FontSize>
          </S.FlexBox>
          <S.CreatePostBody>
            <QuillWrapper theme="snow" modules={modules} formats={formats} />
          </S.CreatePostBody>
        </div>
        <div>
          <S.FontSize>사진</S.FontSize>
          <S.AddImageContainer>
            <BsFillFileEarmarkImageFill size={24} />
            <S.UrlUI>사진 url들어올 곳</S.UrlUI>
            <S.ButtonUI>사진추가</S.ButtonUI>
          </S.AddImageContainer>
        </div>
        <S.FlexBox side="25px 0px 10px 0px">
          <S.ButtonUI>올리기</S.ButtonUI>
        </S.FlexBox>
      </div>
    </S.CreatPostContainer>
  );
};

export default PostCreate;
