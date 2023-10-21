import * as S from './styled';
import { useEffect, useState } from 'react';
import { BsFillFileEarmarkImageFill } from 'react-icons/bs';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { SelectBoardAtom } from '@/recoil/atoms/UserPostsAtom';
import CustomSelect from '@/components/molecules/post-board/CustomSelect';
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

export interface FileInfoType {
  //이미지 업로드 리펙토링 type
  url: string;
  image?: boolean;
  file?: File;
}

const PostCreate = () => {
  const [unitTitle, setUnitTitle] = useState<string>(''); //제목
  const [quillText, setQuillText] = useState<string>(''); //본문
  const [uploadImage, setUploadImage] = useState<FormData>(); //리펙토링 된 이미지state
  // const [uploadImage1, setUploadImage1] = useState<FormData>(); //이미지
  // const [uploadImage2, setUploadImage2] = useState<FormData>(); //이미지2
  // const [uploadImage3, setUploadImage3] = useState<FormData>(); //이미지3
  const getBoard = useRecoilValue(SelectBoardAtom); //boardSelect
  const router = useRouter();
  const resetSelect = useResetRecoilState(SelectBoardAtom);

  //다른 페이지로 넘어가도 초기화
  useEffect(() => {
    router.events.on('routeChangeStart', resetSelect);
    return () => {
      router.events.off('routeChangeStart', resetSelect);
    };
  }, []);

  /**이미지 업로드 리펙토링 */
  const [files, setFiles] = useState<FileInfoType[]>([]);
  const [showImages, setShowImages] = useState([]);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list: FileInfoType[] = [];
    const fileList = e.target.files;
    const formData = new FormData();

    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        list.push({
          url: URL.createObjectURL(fileList[i]),
          image: fileList[i].type.includes('image'),
          file: fileList[i],
        });
        formData.append('file', fileList[i]);
      }
    }
    if (list.length > 3) {
      setFiles(list.slice(0, 3));
    } else {
      setFiles(list);
    }
    setUploadImage(formData);
  };

  /**업로드 버튼 핸들링 */
  const handleSubmit = async () => {
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
        if (uploadImage !== undefined) {
          await BOARDS.createImg(uploadImage as FormData, data.data.id);
        }
        // if (uploadImage1 !== undefined) {
        //   await BOARDS.createImg(uploadImage1 as FormData, data.data.id);
        // }
        // if (uploadImage2 !== undefined) {
        //   await BOARDS.createImg(uploadImage1 as FormData, data.data.id);
        // }
        // if (uploadImage3 !== undefined) {
        //   await BOARDS.createImg(uploadImage1 as FormData, data.data.id);
        // }
        //router => 해당 글 로 페이지 이동
        router.push(`/post/unit/${data.data.id}`);
        resetSelect(); //게시글 카테고리 초기화
      }
    }
  };

  /**이미지 버튼 핸들링 */
  // const handleImageUpload1 = (e: any) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   setUploadImage1(formData);
  // };
  // const handleImageUpload2 = (e: any) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   setUploadImage2(formData);
  // };
  // const handleImageUpload3 = (e: any) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   setUploadImage3(formData);
  // };

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
          {/* 이미지 업로드 리펙토링 */}
          <BsFillFileEarmarkImageFill />
          <input type="file" onChange={onChangeFile} multiple />
          <S.AddImageContainer>
            {files.map((data) => {
              return <PreviewImg url={data.url} />;
            })}
          </S.AddImageContainer>
          {/* <S.AddImageContainer>
            <BsFillFileEarmarkImageFill size={24} />
            <S.ImageInput
              type="file"
              accept="image/*"
              onChange={handleImageUpload1}
            />
          </S.AddImageContainer>
          <S.AddImageContainer>
            <BsFillFileEarmarkImageFill size={24} />
            <S.ImageInput
              type="file"
              accept="image/*"
              onChange={handleImageUpload2}
            />
          </S.AddImageContainer>
          <S.AddImageContainer>
            <BsFillFileEarmarkImageFill size={24} />
            <S.ImageInput
              type="file"
              accept="image/*"
              onChange={handleImageUpload3}
            />
          </S.AddImageContainer> */}
        </div>
        <S.FlexBox side="25px 0px 10px 0px">
          <S.ButtonUI onClick={handleSubmit}>올리기</S.ButtonUI>
        </S.FlexBox>
      </div>
    </S.CreatPostContainer>
  );
};

export default PostCreate;
