import exp from 'constants';
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

// ********************* ChatSpace ***********************//

export const ChatSpaceWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const ChatSpaces = styled.div`
  width: 65px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #3f0e40;
  border-top: 1px solid rgb(82, 38, 83);
  border-right: 1px solid rgb(82, 38, 83);
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
  /* border-radius: 7px; */
`;

export const ChatLists = styled.div`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: #3f0e40;
  color: rgb(188, 171, 188);
  vertical-align: top;
  & a {
    padding-left: 36px;
    color: inherit;
    text-decoration: none;
    height: 28px;
    line-height: 28px;
    display: flex;
    align-items: center;
    &.selected {
      color: white;
    }
  }
  & .bold {
    color: white;
    font-weight: bold;
  }
  & .count {
    margin-left: auto;
    background: #cd2553;
    border-radius: 16px;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    height: 18px;
    line-height: 18px;
    padding: 0 9px;
    color: white;
    margin-right: 16px;
  }
  & h2 {
    height: 36px;
    line-height: 36px;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
  }
`;

export const ChatSpaceName = styled.div`
  height: 64px;
  line-height: 64px;
  border: none;
  width: 100%;
  text-align: center;
  border-top: 1px solid rgb(82, 38, 83);
  border-bottom: 1px solid rgb(82, 38, 83);
  font-weight: 900;
  font-size: 24px;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  /* padding-left: 16px; */
  margin: 0;
  color: white;
`;

export const ChatListScroll = styled.div`
  height: 436px;
  overflow-y: auto;
`;

export const Chats = styled.div`
  flex: 1;
`;
