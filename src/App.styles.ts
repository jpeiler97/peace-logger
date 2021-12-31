import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #3243b8;
`;

export const Title = styled.div`
  font-family: Arimo, Arial, sans-serif;
  color: #ffffff;
  font-size: 85px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: default;
    user-select: none;
  }
`;
