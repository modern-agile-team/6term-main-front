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