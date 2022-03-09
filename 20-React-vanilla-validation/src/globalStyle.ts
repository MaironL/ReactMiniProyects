import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {

/*
* =============== 
* Variables
* ===============
*/

/*
* Dark shades of primary color 
*/
--clr-primary-1: hsl(205, 86%, 17%);
--clr-primary-2: hsl(205, 77%, 27%);
--clr-primary-3: hsl(205, 72%, 37%);
--clr-primary-4: hsl(205, 63%, 48%);
/* 
* Primary/main color 
*/
--clr-primary-5: hsl(205, 78%, 60%);
/* 
* Lighter shades of primary color 
*/
--clr-primary-6: hsl(205, 89%, 70%);
--clr-primary-7: hsl(205, 90%, 76%);
--clr-primary-8: hsl(205, 86%, 81%);
--clr-primary-9: hsl(205, 90%, 88%);
--clr-primary-10: hsl(205, 100%, 96%);
/* 
* Darkest grey - used for headings 
*/
--clr-grey-1: hsl(209, 61%, 16%);
--clr-grey-2: hsl(211, 39%, 23%);
--clr-grey-3: hsl(209, 34%, 30%);
--clr-grey-4: hsl(209, 28%, 39%);
/*
* Grey used for paragraphs 
*/
--clr-grey-5: hsl(210, 22%, 49%);
--clr-grey-6: hsl(209, 23%, 60%);
--clr-grey-7: hsl(211, 27%, 70%);
--clr-grey-8: hsl(210, 31%, 80%);
--clr-grey-9: hsl(212, 33%, 89%);
--clr-grey-10: hsl(210, 36%, 96%);
--clr-white: #fff;
--clr-black: #222;
/*
* Trinkes 
*/
--transition: all 0.3s linear;
--spacing: 0.1rem;
--radius: 0.25rem;
--light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
--dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

}

/*
* =============== 
* Global Styles
* ===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
} 

:root {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

@media screen and (min-width: 280px) {
  :root {
    font-size: calc(14px + 8 * ((100vw - 280px) / 1640));
  }
  p {
    line-height: calc(19.6px + 11.2 * ((100vw - 280px) / 1640));
  }
}

@media screen and (min-width: 1920px) {
  :root {
    font-size: 20px;
  }

  p {
    line-height: 28px;
  }
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

/*
* ==================== 
* Custom Project Style
* ====================
*/

#root {
  display: grid;
  grid:  auto / auto;
  /* grid-template-areas: Example
  "navbar" 
  "main"
  "footer"
  ; */
  min-height: 100%;
  background-color: var(--clr-bg-2);
}
`;

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1920px;
  align-items: center;

  @media screen and (min-width: 900px) {
    width: 95vw;
  }
`;

export default GlobalStyle;
