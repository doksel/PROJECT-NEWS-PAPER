import styled from "styled-components";
import bg from "../../../images/main_bg.jpg";

export const WrapForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cececece;
  position: fixed;
  background: url(${bg}) center;
  background-size: cover;

  form {
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);

    h1 {
      text-align: center;
    }
  }
`;

export const MainTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
`;

export const WrapLogo = styled.div`
  width: 250px;
  padding: 0px 10px 20px;
  // background: ${props => props.theme.colors.disabled};

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 10px ${props => props.theme.colors.primary});
  }
`;
