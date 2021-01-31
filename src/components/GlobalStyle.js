import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --color-font-black: #252422;
  --main-color: #252422;
  --secondary-color: #f9cdcd;
  --special-color: #FB8F1D;
  --special2-color: #252422;
  --line-height: 2.3rem;
  --font-header: 'Playfair Display', serif;
  --font-mulish: 'Mulish', sans-serif;
  --font-inter: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-inter);
    margin: 0 auto;
    @media (max-width: 575.98px) {

    }

    // Small devices (landscape phones, less than 768px)
    @media (min-width: 767.98px) {
      width: 98%;
    }

    // Medium devices (tablets, less than 992px)
    @media (min-width: 991.98px) {
      width: 95%;
    }

    // Large devices (desktops, less than 1200px)
    @media (min-width: 1199.98px) {
      width: 90%;
    }
    // Large devices (desktops, less than 1200px)
    @media (min-width: 1679.98px) {
      width: 80%;
    }
  }



  h1 {
    font-weight: medium;
    font-family: var(--font-header);
    font-size: 12rem;
    line-height: 90%;

    @media (max-width: 1700px) {
      font-size: 9rem;
    }
  }

  h1 {
    font-size: 5rem;
    font-family: var(--font-header);
    line-height: 120%;
  }

  h2 {
    font-size: 3rem;
    font-family: var(--font-header);
    line-height: 90%;
  }
  h3 {
    font-size: 2rem;
    font-family: var(--font-inter);
  }

  a {
    font-size: 1.6rem;
    text-decoration: none;
    font-family: var(--font-mulish);
    font-weight: 300;
  }

  ul {
    list-style: none;
  }

  span {
    font-weight: bold;
  }

  p {
    padding: 3rem 0rem;
    font-size: 1.7rem;
    line-height: 150%;
    font-family: var(--font-inter);
    font-weight: light;
  }

  button {
    background-color: #FB8F1D;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    /* margin: 4px 2px; */
    cursor: pointer;
    border: 1px solid #FB8F1D;
    border-radius: 8px;
    transition: all 0.5s ease;
    outline:none;
    a{
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    &:hover{
      background-color: transparent;
      color: #FB8F1D;
    }
    &:hover a{
      color: white;
    }
  }

  .footer-main {
    h3{
      font-size: 1.6rem;
      color: red;
      font-family: var(--font-mulish);
      padding-bottom: 3.6rem;
    }
    li {
      padding-bottom: 2.3rem;
      background: blue;
    }
    p {
    padding: 3rem 0rem;
    font-size: 1.7rem;
    line-height: 150%;
    font-family: var(--font-mulish);
    font-weight: light;
  }
  }

::-moz-selection {
  color: #fff;
  background: var(--special-color);
  text-shadow: none;
}

::selection {
  color: #fff;
  background: var(--special-color);
  text-shadow: none;
}

`;

export default GlobalStyle;
