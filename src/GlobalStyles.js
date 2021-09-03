import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --background-dark: #0c0c0c;
    --color-white: #eee;
    --color-grey-100: #ddd;
    --color-grey-300: #bbb;
    --color-grey-500: #999;
    --color-grey-700: #888;
    --color-grey-900: #777;
    --max-width: 1000px;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading-sm: 28px;
    --fz-heading-md: 32px;
    --fz-heading-lg: 36px;
    --border-radius: 30px;
    --margin-md: 24px;
    --margin-lg: 32px;
    --padding-xs: 14px;
    --padding-sm: 18px;
    --padding-md: 24px;
    --padding-lg: 32px;
    --line-height-sm: 1.6;
  }
`;
export default GlobalStyles;
