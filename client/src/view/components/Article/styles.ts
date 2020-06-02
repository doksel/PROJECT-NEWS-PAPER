import styled from "styled-components";

export const WrapArticle = styled.div`
  width: 100%;

  a {
    width: 100%;
  }
`;
export const WrapImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    transition: all 0.5s;
  }

  &:hover {
    img {
      filter: grayscale(1);
      transform: scale(1.2);
      transition: all 0.5s;
    }
  }

  a {
    display: block;
    overflow: hidden;
  }
`;

export const TitleCategory = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
  text-transform: uppercase;
  color: ${props => props.theme.colors.red};
`;

export const TitleArticle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.5s;

  &:hover {
    color: ${props => props.theme.colors.red};
    transition: all 0.5s;
  }
`;

export const Author = styled.div`
  margin: 5px 0;

  a {
    color: ${props => props.theme.colors.red};
  }
`;

export const Article = styled.div`
  margin: 5px 0;
`;

export const WrapInfo = styled.div`
  margin: 5px 0;
  display: flex;
  color: ${props => props.theme.colors.disabled};
`;
