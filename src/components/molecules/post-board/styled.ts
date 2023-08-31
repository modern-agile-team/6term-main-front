import Link from "next/link";
import styled from "styled-components";

//게시판 컨테이너
export const PostContainer = styled.div`
    width: 550px;
    height: auto;
    display: flex;
    background-color: #F6F4EB;
    box-shadow: 0px 5px 14px 0px rgba(0 ,0 , 0, 25%);
    margin: 25px;
    border-radius: 5px;
`;


/*
==== common styled ====
@params : flexType="column" | "row": string
@params : width="width":number 
@returns : flexType="column" | "row"
@returns : width={number}px
*/

interface ColumnAndRow {
    flexType?: string;
    width?: number;
}
export const FlexBox = styled.div<ColumnAndRow>`
    display: flex;
    flex-direction: ${(props) => props.flexType === "column" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width}px;
    margin: 10px;
`;

//프로필 이미지
export const ProfileImg = styled.img`
    border-radius: 50%;
    border: 1px solid #999;
    height: 48px;
`;

/*
    게시물 제목, 본문
    @params : background-color="color" : string
    @returns : hex, rgb, ...  color code
*/
interface PostBoxes {
    backgroundColor?: string;
}
export const PostTitle = styled(Link)<PostBoxes>`
    margin-right: auto;
    background-color: ${(props)=>props.backgroundColor};
    padding: 5px;
    width: 440px;
    text-decoration: none;
    color: #000;
`; 

//검색 form
export const SearchForm = styled.form`
    width: 550px;
    text-align: center;
`
//검색입력창
export const SearchInput = styled.input`
    width: 470px;
    border: none;
    background-color: #F6F4EB;
    margin-left: 10px;
    margin: 10px;
`
//검색버튼
export const SearchButton = styled.button`
    border: none;
    margin-right: 10px;
    background-color: #F6F4EB;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #EAE6D4;
    }
`
//모달버튼
export const DialogButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #F6F4EB;
`;