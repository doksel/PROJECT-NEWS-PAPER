import styled from "styled-components";

export const Wrapper = styled.div`
  width: max-content;
  margin: 10px 0;
`;

export const Label = styled.label`
  position: relative;
  background-color: ${props => props.theme.colors.red};
  border: ${props => props.theme.colors.red} 1px solid;
  border-radius: 25px;
  position: relative;
  padding-left: 40px;
  padding-right: 20px;
  cursor: pointer;
  line-height: 2.5;
  color: #fff;
  font-size: 100%;
  display: flex !important;
  align-items: center;
  min-height: 44px;
  transition: 0.2s ease-in-out;
  margin: 10px 0;
  outline: none;

  &.disabled {
    background-color: ${props => props.theme.colors.red_hover};
    border: solid 1px ${props => props.theme.colors.red_hover};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${props => props.theme.colors.red_hover};
    border: solid 1px ${props => props.theme.colors.red_hover};

    .icon {
      filter: brightness(0) invert(1);
    }
  }

  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.red_hover} !important;

    .icon {
      filter: brightness(0) invert(1);
    }
  }

  .icon {
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -12px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  @media screen and (max-width: 480px) {
    line-height: 1.4;
  }

  input {
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
