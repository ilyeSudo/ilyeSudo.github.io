import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
// import Dimensions from 'react-dimensions';

// import 'prismjs/themes/prism-solarizedlight.css';
import 'prismjs/themes/prism.css';

import Nav from './../components/Nav';
import Favicon from './../components/Favicon';

import GlobalStyle from './GlobalStyle';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 83rem;
  padding: 0em 0em 2em;
  margin: 0 auto;

  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }

  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`;

const StyledHeader = styled.header``;
const Body = styled.body`
  flex: 1;
`;
const Footer = styled.footer`
  align-self: left;
`;

const StyledTitle = styled.h1`
  // margin-bottom: 2rem;
  margin: 0.3em 0;

  @media (min-width: 350px) {
    margin: 0.5em 0 0.2em;
  }

  @media (min-width: 520px) {
    margin: 0.667em 0;
  }
`;

const TitleLink = styled(Link)`
  font-size: 40px;
  color: #000;
  text-decoration: none;
  border: none;

  &:hover {
    color: #0000ff;
  }
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      <Favicon />

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700"
          rel="stylesheet"
        />
        <title>Ilyes Houdjedje</title>
        <meta property="og:title" content="Ilyes Houdjedje" />
        <meta property="og:description" content="Personal Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilyesudo.com" />
        <meta
          property="og:image"
          content="https://ilyesudo.com/social-meta.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://ilyesudo.com/social-meta.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ilyes Houdjedje" />
        <meta name="twitter:description" content="Personal Website" />
        <meta
          name="twitter:image"
          content="https://ilyesudo.com/social-meta.png"
        />
        <meta name="twitter:creator" content="@prestonrichey" />
      </Helmet>

      <StyledHeader>
        <StyledTitle>
          <TitleLink to="/about">
            Ilyes Houdjedje <br />( Full-Stack JS Developer )
          </TitleLink>
        </StyledTitle>

        <Nav />
      </StyledHeader>
      <Body>{children}</Body>
      <Footer>
        IlyeSudo © 2020{' '}
        <a
          href="https://github.com/ilyeSudo/ilyeSudo.github.io"
          target="_blank"
        >
          Source Code
        </a>
      </Footer>
    </Main>
  );
};

export default Layout;
