import styled from "styled-components";

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

export const ProfileImg = styled.img`
    border-radius: 50%;
    border: 1px solid #999;
    height: 40px;
`;

export const PostTitle = styled.div`
    margin-right: auto;
    background-color: #fff;
    padding: 5px;
    width: 420px;
`; 

export const PostMainText = styled.div`
    margin-right: auto;
    padding: 5px;
`;