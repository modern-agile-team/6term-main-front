import styled from "styled-components";

export const UnitContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const UnitWriterImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

export const HeartInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-left: 10px;
`;

export const UnitTitle = styled.div`
    width: 500px;
    margin: auto;
    font-size: 25px;
    font-weight: bold;  
    padding-left: 25px;
`;

export const MainTextContainer = styled.div`
    width: 800px;
    height: 300px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 25%);
    border-radius: 5px;
    padding: 25px;
`

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
    flex-direction: ${(props) => props.direction === "column" ? "column" : "row"};
    width: ${(props) => props.width}px;
    margin-top: ${(props) => props.margin};
`;

/** PostComment.styled */

export const CommentContainer = styled.div`
    margin-top: 25px;
`

export const CreateCommentBox = styled.div`
    box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 25%);
    padding: 10px;
    height : auto;
    border-radius: 5px;
`;

export const CommentInputBox = styled.textarea`
    width: 745px;
    height: 80px;
    padding-top : 10px;
    border: 1px solid rgb(9, 9, 9, 25%);
    outline: none;
`;

export const CreateCommentButton = styled.button`
    border: none;
    background-color: #fff;
    cursor: pointer;
    width: 70px;
    &:hover{
        background-color: #E7F7FF;
        transition: all ease 0.3s;
    }
    margin:10px;
    border-radius: 5px;
`
