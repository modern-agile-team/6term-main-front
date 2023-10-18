import styled from 'styled-components';

//** UnitHeader.tsx */

export const UnitContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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

//** UnitBody.tsx */
export const MainTextContainer = styled.div`
  width: 800px;
  height: 300px;
  box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 25%);
  border-radius: 5px;
  padding: 25px;
`;

export const SlidImages = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 350px;
  overflow: hidden;
  position: relative;
  border: 1px solid red;
`;

export const BodyImages = styled.img`
  width: 600px;
  height: 350px;
  background-repeat: no-repeat;
  object-fit: scale-down;
`;

export const TextOutPut = styled.div`
  width: 800px;
  height: auto;
  overflow-wrap: break-word;
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

/** PostComments.tsx */

export const CommentContainer = styled.div`
  margin-top: 25px;
`;

export const CreateCommentBox = styled.div`
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 25%);
  padding: 10px;
  height: auto;
  border-radius: 5px;
`;

export const CommentInputBox = styled.textarea`
  width: 715px;
  height: 80px;
  padding-top: 10px;
  margin: 8px;
  border: 1px solid rgb(9, 9, 9, 25%);
  outline: none;
  resize: none;
`;

export const CreateCommentButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  width: 70px;
  &:hover {
    background-color: #e7f7ff;
    transition: all ease 0.3s;
  }
  margin: 10px;
  border-radius: 5px;
`;

export const ComponentHeader = styled.div`
  font-size: 28px;
  font-weight: bold;
  padding: 10px 0px 10px 15px;
`;

//** PostComments.tsx */
export const CommentArea = styled.div`
  width: 715px;
  height: auto;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 0px 15px 15px;
`;

export const Comment = styled.div`
  width: 570px;
  padding: 5px 0px 0px 15px;
`;
//**콤보박스 컨테이너 */
export const ComboBox = styled.ul`
  position: relative;
  border-radius: 12px;
  cursor: pointer;
  &::before {
    content: '...';
    position: absolute;
    top: -5px;
    color: #000;
    font-size: 20px;
  }
`;

interface Show {
  show: boolean;
}
//**콤보박스 눌렀을 때 옵션 보여주는 CSS */
export const SelectOptions = styled.ul<Show>`
  position: absolute;
  list-style: none;
  top: 20px;
  width: 100px;
  padding: 0px;
  overflow: hidden;
  text-align: center;
  height: 60px;
  max-height: ${(props) => (props.show ? 'none' : '0')};
  border-radius: 8px;
  background-color: #f0f0f0;
  color: #000;
`;

//**콤보박스 내부 요소 */
export const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #ddd;
  }
`;

interface Size {
  size?: number;
}
/**
 * @param : size={number}
 *
 */
export const ShowUserName = styled.div<Size>`
  padding: 5px 0px 0px 8px;
  font-size: ${(props) => props.size}px;
  font-weight: bold;
`;

/**구분선 css */
export const DivisionLine = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 25%);
  margin: 10px;
  width: 750px;
  height: auto;
  left: 0px;
`;
