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
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about-us" },
  { name: "Categories", to: "/categories" },
  { name: "Business", to: "/categories/business" },
  { name: "Politics", to: "/categories/politics" },
  { name: "Travel", to: "/categories/travel" },
  { name: "Sports", to: "/categories/sports" },
  { name: "Contacts", to: "/contacts" }
];
