import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  breakpoint: '1300px',
};

const StyledPage = styled.div`
  background: white;
  color: {props => props.theme.black};
`;

const Inner = styled.div`
  max-width: {props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:beforeAll, *:after {
    box-sizing: inherit;
  }
`;

export default class Pages extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
