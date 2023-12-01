import styled from 'styled-components';

const SkeletonUI = () => {
  return (
    <SkeletonContainer>
      <div>
        <img src="..." alt="..." />
        <div>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </SkeletonContainer>
  );
};

export default SkeletonUI;

const SkeletonContainer = styled.div`
  position: relative;
  display: flex;
`;

const UnitSkeletonBox = styled.div`
  width: 270px;
  height: 272px;
  border: 1px solid #9996;
  background-color: #9996;
`;
