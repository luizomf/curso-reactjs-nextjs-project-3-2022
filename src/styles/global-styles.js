import { createGlobalStyle } from 'styled-components';

import OpenSansV29LatinRegularWoff from '../fonts/open-sans-v29-latin/open-sans-v29-latin-regular.woff';
import OpenSansV29LatinRegularWoff2 from '../fonts/open-sans-v29-latin/open-sans-v29-latin-regular.woff2';
import OpenSansV29LatinItalicWoff from '../fonts/open-sans-v29-latin/open-sans-v29-latin-italic.woff';
import OpenSansV29LatinItalicWoff2 from '../fonts/open-sans-v29-latin/open-sans-v29-latin-italic.woff2';
import OpenSansV29Latin700Woff from '../fonts/open-sans-v29-latin/open-sans-v29-latin-700.woff';
import OpenSansV29Latin700Woff2 from '../fonts/open-sans-v29-latin/open-sans-v29-latin-700.woff2';
import OpenSansV29Latin700ItalicWoff from '../fonts/open-sans-v29-latin/open-sans-v29-latin-700italic.woff';
import OpenSansV29Latin700ItalicWoff2 from '../fonts/open-sans-v29-latin/open-sans-v29-latin-700italic.woff2';
import MontserratV24Latin900Woff from '../fonts/montserrat-v24-latin/montserrat-v24-latin-900.woff';
import MontserratV24Latin900Woff2 from '../fonts/montserrat-v24-latin/montserrat-v24-latin-900.woff2';
import MontserratV24Latin900ItalicWoff from '../fonts/montserrat-v24-latin/montserrat-v24-latin-900italic.woff';
import MontserratV24Latin900ItalicWoff2 from '../fonts/montserrat-v24-latin/montserrat-v24-latin-900italic.woff2';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${OpenSansV29LatinRegularWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansV29LatinRegularWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: local(''),
        url(${OpenSansV29LatinItalicWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansV29LatinItalicWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${OpenSansV29Latin700Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansV29Latin700Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 700;
    src: local(''),
        url(${OpenSansV29Latin700ItalicWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansV29Latin700ItalicWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: local(''),
        url(${MontserratV24Latin900Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${MontserratV24Latin900Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-900italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 900;
    src: local(''),
        url(${MontserratV24Latin900ItalicWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${MontserratV24Latin900ItalicWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
