import styled from "styled-components";

export const WrapCategory = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  a {
    width: 100%;
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

export const Info = styled.div`
  margin: 5px 0;
`;
