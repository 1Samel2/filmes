import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  padding: 40px;
  h2 {
    color: white;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const Content = styled.div`
  padding: 40px;
  cursor: pointer;
  h3 {
    margin-top: 10px;
    text-align: center;
    color: white;
  }

  img {
    border-radius: 20px;
    width: 250px;
    height: 100%;
    box-shadow: 0 0 20px #ffffff;
  }
`;
