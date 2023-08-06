import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: ${(props) =>
    props.changeBackground ? "black" : "transparent"};
  transition: background-color 0.6s ease;
  align-items: center;
  z-index: 99;
  position: fixed;
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  text-decoration: none;

 

  a {
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  a.active {
    border-bottom: 2px solid white;
    transition: all 0.3s ease;
  }
`;

export const DivInput = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  transition: transform 0.3s ease;
  input {
    border: none;
    background: none;
    outline: none;
    color: white;
  }

  svg {
    color: white;
  }

  &:active {
    transform: scale(1.2);
  }
`;
