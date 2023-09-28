import * as S from './styled';
import { useState, useEffect } from 'react';
import { BsFillFileEarmarkImageFill } from 'react-icons/bs';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import SelectBox from '@/components/molecules/post-board/SelectBox';
import createPostApi from '@/apis/postApi/createPostApi';
import createPostImgApi from '@/apis/postApi/addImageApi';
import { useRecoilState } from 'recoil';
import { SelectBoard } from '@/recoil/atoms/UserPostsAtom';
import CustomSelect from '@/components/molecules/post-board/CustomSelect';

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
  const [unitTitle, setUnitTitle] = useState<string>('');
  const [quillText, setQuillText] = useState<string>('');
  const [uploadImage, setUploadImage] = useState<FormData>();
  const [getBoard, setGetBoard] = useRecoilState(SelectBoard);

  /**업로드 버튼 핸들링 */
  const handleSubmit = async () => {
    const isData = {
      head: unitTitle,
      body: quillText,
      main_category: getBoard.main,
      sub_category: getBoard.sub,
    };
    const data = await createPostApi(isData);
    if (uploadImage !== undefined) {
      await createPostImgApi(uploadImage as FormData, data.data.id);
    }
    alert('업로드');
  };

  /**이미지 버튼 핸들링 */
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    setUploadImage(formData);
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
          <S.FlexBox direction="row" side="5px 0px 5px 0px">
            <S.FontSize>본문</S.FontSize>
            {/* 게시판 선택 */}
            {/* <SelectBox /> */}
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
            <BsFillFileEarmarkImageFill size={24} />
            <S.ImageInput
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </S.AddImageContainer>
          <S.AddImageContainer>
            <BsFillFileEarmarkImageFill size={24} />
            <S.ImageInput
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </S.AddImageContainer>
          <S.AddImageContainer>
            <BsFillFileEarmarkImageFill size={24} />
            <S.ImageInput
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
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
