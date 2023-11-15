import styled from 'styled-components';

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

interface CommentProfileBg {
  img?: string;
}

/** 댓글프로필이미지 */
export const CommentUserImage = styled.div<CommentProfileBg>`
  border-radius: 50%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  width: 28px;
  height: 28px;
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

export const Comment = styled.div`
  width: 570px;
  padding: 5px 0px 0px 15px;
`;

//**콤보박스 내부 요소 */
export const Option = styled.div`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #ddd;
  }
`;
