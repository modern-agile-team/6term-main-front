import styled from "styled-components";

/*postBoard */
export const PostBoardTitle = styled.div`
    font-size: 25px;
    width: 150px;
    font-weight: bold;
    margin: auto;
`

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

export const postBoardUnit = styled.div`
    display: flex;
    justify-content: center;
`;

/* postUnit */
export const UnitContainer = styled.div`
    display: flex;
    justify-content: center;
`;
