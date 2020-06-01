import styled from "styled-components";

export const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  color: #fff;
  background: ${props => props.theme.colors.red};
  box-shadow: 2px 2px 8px 1px ${props => props.theme.colors.disabled};

  .burger-menu {
    margin-right: 10px;
    display: none;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}) {
      display: block;
    }
  }

  h1 {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 1px;
  }
`;

export const WrapLogo = styled.div`
  width: 150px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapNavMenu = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 8px 1px ${props => props.theme.colors.disabled};
`;

export const WrapLink = styled.div`
  height: 100%;
  color: ${props => props.theme.colors.disabled};
  transition: all 0.5s;

  a {
    height: 100%;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    color: #fff;
    background: ${props => props.theme.colors.red};
    border-top: ${props => props.theme.borders.main_hover};
    border-bottom: ${props => props.theme.borders.main_hover};
    transition: all 0.5s;
  }
`;
