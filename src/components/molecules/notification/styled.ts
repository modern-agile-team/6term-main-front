import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  transform: translate(-90%, -50%);
  background-color: white;
  width: 150px;
  height: 300px;
  padding: 5px 20px 20px 20px;
  margin: 180px 0px 0px 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  text-align: center;
`;

export const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0%);
`;

export const DivisionLine = styled.div`
  border: 1px solid #999;
  width: 155px;
`;

interface ColumnAndRow {
  direction?: string;
}
/**
  ==== common styled ====
  * @params : direction="column" | "row": string
  * @returns : direction="column" | "row"
  */
export const FlexBox = styled.div<ColumnAndRow>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
`;

/**Provider.tsx */
export const ProviderBox = styled.div`
  width: 183px;
  cursor: pointer;
  margin: 3px 0px 3px 0px;
`;

export const CloseBtn = styled.div`
  margin: 0px;
  padding: 0px;
  margin-left: auto;
  cursor: pointer;
  font-size: 15px;
`;

export const AlarmTitle = styled.div`
  padding: 5px 0px 5px 0px;
`;
