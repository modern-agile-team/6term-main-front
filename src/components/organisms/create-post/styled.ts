import styled from 'styled-components';

export const CreatPostContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

export const CreatePostTitle = styled.div`
  width: 800px;
  height: auto;
`;

export const InputBox = styled.input`
  width: 780px;
  border: none;
  padding: 10px;
  margin: 5px 0px 5px 0px;
  outline: none;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 25%);
  border-radius: 5px;
`;

export const FontSize = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0px 5px 0px;
`;

interface ColumnAndRow {
  direction?: string;
  side?: string;
}
/**
 * @params : direction="column" | "row": string
 * @param : side="string"
 * @returns : direction="column" | "row"
 * @returns : side="0px 0px 0px 0px" | "0px"
 */
export const FlexBox = styled.div<ColumnAndRow>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};
  padding: ${(props) => props.side};
`;

export const CreatePostBody = styled.div`
  height: auto;
  width: 780px;
  padding: 10px 10px 10px 10px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 25%);
  border-radius: 5px;
  flex-wrap: wrap;
`;

export const AddImageContainer = styled.div`
  display: flex;
  width: 790px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 25%);
  padding: 5px;
  border-radius: 5px;
`;

export const ButtonUI = styled.button`
  margin-left: auto;
  border: none;
  cursor: pointer;
  background-color: #fff;
`;

export const UrlUI = styled.div`
  background-color: rgba(9, 9, 9, 25%);
  width: 670px;
  padding-left: 5px;
  margin-left: 10px;
`;
