import Link from "next/link";
import styled from "styled-components";

/** 게시판 컨테이너 */
export const PostContainer = styled.div`
    width: 200px;
    height: 242px;
    display: flex;
    background-color: #fff;
    box-shadow: 0px 5px 14px 0px rgba(0 ,0 , 0, 25%);
    margin: 25px;
    border-radius: 5px;
`;


interface ColumnAndRow {
    flexType?: string;
    width?: number;
    margin?: string | number;
    borderTop?: string;
}
/**
==== common styled ====
* @params : flexType="column" | "row": string
* @params : width="width":number 
* @params : margin="auto"
*
* @returns : flexType="column" | "row"
* @returns : width={number}px
* @returns : margin-top="auto" 
*/
export const FlexBox = styled.div<ColumnAndRow>`
    display: flex;
    flex-direction: ${(props) => props.flexType === "column" ? "column" : "row"};
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
export const BoardList = styled.div`
    margin-left: auto;
    margin-right: 10px;
`

interface PostBoxes {
    backgroundColor?: string;
}
/**
*    게시물 제목, 본문
*    @params : background-color="color" : string
*    @returns : hex, rgb, ...  color code
*/
export const PostTitle = styled(Link)<PostBoxes>`
    background-color: ${(props)=>props.backgroundColor};
    text-decoration: none;
    color: #000;
`; 

interface PostFont {
    fontWeight?: string;
    fontSize?:number;
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
    padding: 4px;
`;
/**검색 컨테이너 */
export const SearchContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    background-color: #fff;
    box-shadow: 0px 5px 14px 0px rgba(0 ,0 , 0, 25%);
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
    width: 530px;
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
  height: 30px;
  margin-right: 7px;
  margin-left: 2px;
`;
interface ThumbnailBg {
    backgroundColor?: string;
}
/** 섬네일 그림/사진
 * @param backgroundColor "color" : string
 * @returns hex,rgba ...
 */
export const ThumbnailImg = styled.div<ThumbnailBg>`
    width: 200px;
    height: 130px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
`;