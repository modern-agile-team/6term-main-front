import styled from 'styled-components';

const Custom404 = () => {
  return (
    <NotFoundContainer>
      <div>
        <NotFoundImage src="/404NotFound.png" alt="404" />
      </div>
    </NotFoundContainer>
  );
};

export default Custom404;

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const NotFoundImage = styled.img`
  width: 550px;
`;
