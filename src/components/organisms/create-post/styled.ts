import styled from 'styled-components';

export const CreatPostContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  margin: 10px 0px 50px 0px;
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
 * @returns : direction="column" | "row"
 */
export const FlexBox = styled.div<ColumnAndRow>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};
  padding: 5px 0px 5px 0px;
  margin: 5px 0px 5px 0px;
`;

export const CreatePostBody = styled.div`
  height: 440px;
  width: 780px;
  padding: 10px 10px 10px 10px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 25%);
  border-radius: 5px;
  flex-wrap: wrap;
`;

export const AddImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
  height: auto;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 25%);
  padding: 10px;
  margin: 10px 0px 10px 0px;
  border-radius: 5px;
`;

export const PreviewContainer = styled.div`
  width: 300px;
  margin-right: 0px auto 0px auto;
`;

export const ButtonUI = styled.button`
  margin-left: auto;
  border: none;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 25%);
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #e7f7ff;
  }
`;

export const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  background-size: cover;
`;

export const ImageInput = styled.input`
  padding-left: 15px;
`;
