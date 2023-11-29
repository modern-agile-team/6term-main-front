import Link from 'next/link';
import styled from 'styled-components';

/* postUnit */
export const UnitContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto;
`;

export const DivisionLine = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 70%);
  margin: 50px auto 0px auto;
  width: 800px;
  height: auto;
`;

export const ComponentHeader = styled.div`
  font-size: 28px;
  font-weight: bold;
  padding: 10px 0px 10px 15px;
`;

export const ControlButtonBox = styled.div`
  cursor: pointer;
  margin: 0px 5px 0px auto;
  border: 1px solid #f00;
  padding: 3px;
  border-radius: 15px;
  color: #f00;
  &:hover {
    background-color: #f00;
    color: #fff;
  }
`;

export const ControlButtonLink = styled(Link)`
  border: 1px solid #999;
  padding: 3px;
  text-decoration: none;
  color: #000;
  border-radius: 15px;
  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

export const ControlButtonContain = styled.div`
  display: flex;
  margin: 10px 0px 0px 0px;
`;
