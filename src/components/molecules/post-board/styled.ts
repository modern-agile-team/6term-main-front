import Link from 'next/link';
import styled from 'styled-components';

/** 게시판 컨테이너 */
export const PostContainer = styled.div`
  width: 270px;
  height: 272px;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 25%);
  margin: 25px;
  border-radius: 5px;
`;

interface ColumnAndRow {
  direction?: string;
  width?: number;
  margin?: string | number;
  borderTop?: string;
}
/**
==== common styled ====
* @params : direction="column" | "row": string
* @params : width="width":number 
* @params : margin="auto"
*
* @returns : direction="column" | "row"
* @returns : width={number}px
* @returns : margin-top="auto" 
*/
export const FlexBox = styled.div<ColumnAndRow>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};
  width: ${(props) => props.width}px;
  margin-top: ${(props) => props.margin};
`;

/** 프로필 이미지 */
export const ProfileImg = styled.img`
  border: 1px solid #000;
  border-radius: 50%;
  max-height: 20px;
`;

/**게시판 이름 */
export const BoardList = styled.div<ThumbnailBg>`
  margin-right: 10px;
  background-color: ${(props) => props.color};
  font-weight: bold;
  border-radius: 5px;
`;

export const PostTitle = styled.div`
  cursor: pointer;
`;

interface PostFont {
  fontWeight?: string;
  fontSize?: number;
}
/**
 * @param fontWeight "bold": string
 * @param fontSize "number": number
 *
 * @returns 폰트 굵기변경
 * @returns 폰트 사이즈
 */
export const FontBox = styled.div<PostFont>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  flex-wrap: wrap;
  margin: 0px;
`;

export const Cardbody = styled.div`
  font-size: 16px;
  font-weight: none;
  overflow: visible;
  text-overflow: ellipsis;
  width: 240px;
  height: 40px;
  padding: 0px;
  margin: 0px;
  h1,
  h2,
  ol,
  li,
  p,
  span,
  strong,
  u {
    font-size: 16px;
    font-weight: 0px;
    margin: 0px;
    text-decoration: none;
  }
`;

/**검색 컨테이너 */
export const SearchContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 25%);
  margin: 25px;
  border-radius: 5px;
`;

/**검색 form */
export const SearchForm = styled.form`
  text-align: center;
  display: flex;
`;
/** 검색입력창*/
export const SearchInput = styled.input`
  width: 500px;
  padding: 5px;
  margin-right: auto;
  border: none;
  background-color: #fff;
  margin-left: 10px;
  margin: 10px;
  outline: none;
`;
/** 검색버튼 */
export const SearchButton = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 5px;
  width: 50px;
  cursor: pointer;
  &:hover {
    background-color: #effaff;
  }
`;
/** 모달버튼 */
export const DialogButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #fff;
  width: 25px;
  height: auto;
  margin-right: 7px;
  margin-left: 2px;
`;
interface ThumbnailBg {
  color?: string;
  img?: string;
}
/** 섬네일 그림/사진
 * @param color "color" : string
 * @param img="src"
 * @returns hex,rgba ...
 * @returns url
 */
export const ThumbnailImg = styled.div<ThumbnailBg>`
  width: 270px;
  height: 140px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const routeProfile = styled.div`
  cursor: pointer;
`;
