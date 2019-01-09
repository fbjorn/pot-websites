import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';


const theme = {
  potRed: '#FF0000',
  potBlack: '#393939',
  potGrey: '#3A3A3A',
  potGreyLight: '#E1E1E1',
  potOffWhite: '#EDEDED',
  terminalGreen: '#00ff00',
  // maxWidth: '95vw',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: ${props => props.theme.potOffWhite};;
  color: ${props => props.theme.potBlack};
`;

const Inner = styled.div`
  ${/* max-width: ${props => props.theme.maxWidth}; */''}
  margin: 0 auto;
  ${/* padding: 2rem; */''}
  
`;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next';
    }
    a {
        text-decoration: none;
        color: ${theme.potBlack};
    }
`;

class Page extends Component {
  

  render() {
    const { foobar } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StyledPage>
            <Meta />
            <Header />
            props.foobar: {foobar}
            <Inner>{this.props.children}</Inner>
          </StyledPage>
          <GlobalStyle />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Page;