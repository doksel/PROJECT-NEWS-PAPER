type breakpointsLayoutTypes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export const breakpointsLayout: breakpointsLayoutTypes = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xxl: "1600px"
};

export const ERROR_MESSAGE: string = "Щось пішло не так. Спробуйте пізніше";

export const menuLinks = [
  { name: "About Us", to: "/about-us" },
  { name: "Categories", to: "/categories" },
  { name: "Business", to: "/business" },
  { name: "Politics", to: "/politics" },
  { name: "Travel", to: "/travel" },
  { name: "Sports", to: "/sports" },
  { name: "Contacts", to: "/contacts" }
];
