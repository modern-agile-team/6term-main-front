import styled from 'styled-components';

/** postBoard */
export const PostBoardTitle = styled.div`
  font-size: 25px;
  width: 180px;
  font-weight: bold;
  margin: auto;
`;

export const CreatePostButton = styled.button`
  border: none;
  width: 60px;
  height: 30px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 25%);
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  margin: auto;
  cursor: pointer;
  &:hover {
    background-color: #e7f7ff;
  }
`;

/**PostBoardFooter.tsx */
export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0px 50px 0px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const HeaderContainer = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
