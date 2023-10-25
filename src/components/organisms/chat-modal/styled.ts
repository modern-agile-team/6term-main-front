import styled from 'styled-components';

interface ColumnAndRow {
  direction?: string;
}
/**
 * @params : direction="column" | "row": string
 * @returns : direction="column" | "row"
 */
// flexible box
export const FlexBox = styled.div<ColumnAndRow>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
`;
// modal Wrapper
export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
  /* padding: 20px; */
  border: 1px solid #ccc;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  text-align: center;
  background-color: white;
`;
// modal 주변 backgound
export const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;