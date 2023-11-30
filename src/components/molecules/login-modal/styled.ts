import Link from 'next/link';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-left: auto;
  border-radius: 5px;
  background-color: #fff;
`;

export const ButtonContain = styled.div`
  display: flex;
  justify-content: center;
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

export const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const DivisionLine = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 50%);
  width: 180px;
`;

/**Provider.tsx */
export const ProviderBox = styled.div`
  width: 183px;
  cursor: pointer;
  margin: 3px 0px 3px 0px;
`;

/**SaveToken.tsx */
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 0px 0px 300px 0px;
`;

/* AferLoginModal ---------------- */

export const AfterModalContainer = styled.div`
  position: absolute;
  top: 80px;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 150px;
  padding: 2px 2px 10px 2px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  text-align: center;
`;

export const ControlBox = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #000;
`;

export const ControlLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const ControlCancel = styled.div`
  cursor: pointer;
  text-align: end;
  margin: 0px 10px 0px 0px;
`;
