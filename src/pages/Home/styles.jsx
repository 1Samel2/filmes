import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 100vh;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-text-paragraph {
    width: 40%;
    height: 100%;
    color: #fff;

    padding: 20px;

    @media (max-width: 768px) {
      order: 1;
      width: 100%;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.5rem;
      line-height: 1.2;
      margin-bottom: 40px;

      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }

  .button {
    display: flex;
    gap: 20px;
  }
`;

export const DivImg = styled.div`
  width: 20%;
  height: 100%;

  @media (max-width: 768px) {
    order: 0;
    width: 80%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 20px #000;
  }
`;
