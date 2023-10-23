import styled from 'styled-components';

export const CollapseButton = styled.div<{ collapse: boolean }>`
  background: transparent;
  font-size: 12px;
  border: none;
  width: 26px;
  height: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-left: -24px;
  cursor: pointer;
  & > svg {
    transition: transform 0.2s;
    transform: rotate(${(props) => (props.collapse ? '90deg' : '0')});
  }
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Category = styled.div`
  color: #ffc2c2;
`;

// interface ColumnAndRow {
//   direction?: string;
// }
// /**
//  * @params : direction="column" | "row": string
//  * @returns : direction="column" | "row"
//  */
// // flexible box
// export const FlexBox = styled.div<ColumnAndRow>`
//   display: flex;
//   flex-direction: ${(props) =>
//     props.direction === 'column' ? 'column' : 'row'};
//   justify-content: center;
//   align-items: center;
// `;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
