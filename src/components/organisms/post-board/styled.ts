import styled from "styled-components";

/*postBoard */
export const PostBoardTitle = styled.div`
    font-size: 25px;
    width: 150px;
    font-weight: bold;
    margin: auto;
`

export const CreatePostButton = styled.button`
    border: none;
    width: 60px;
    height: 30px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 25%);
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    margin: auto;
    cursor: pointer;
    &:hover {
        background-color: #e7f7ff;
    }
`

export const postBoardUnit = styled.div`
    display: flex;
    justify-content: center;
`

/* postUnit */
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
