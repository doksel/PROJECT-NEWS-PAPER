import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  TypeTheme
>;

type TypeTheme = typeof theme;

export const theme = {
  colors: {
    main: "darkslategray",
    secondary: "black",
    primary: "royalblue",
    success: "limegreen",
    error: "crimson",
    red: "crimson",
    red_hover: "lightcoral",
    disabled: "darkgrey",
    main_hover: "lightslategray",
    secondary_hover: "darkgray",
    primary_hover: "cornflowerblue",
    success_hover: "lightgreen",
    error_hover: "crlightcoralimson",
    link_hover: "#234161"
  },

  breakPoints: {
    lg: "1024px",
    xl: "1440px"
  },

  borders: {
    main: "1px solid darkslategray",
    main_hover: "1px solid lightslategray",
    error: "1px solid crimson"
  },

  fonts: {
    size_text: "16px",
    size_h1: "24px",
    size_h2: "20px"
  }
};

type StyleType = {
  justifyContent?: string;
  alignItems?: string;
};

export const Row = styled.div<StyleType>`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "inherit"};
  align-items: ${props => (props.alignItems ? props.alignItems : "inherit")};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export { css, ThemeProvider };
export default styled;
