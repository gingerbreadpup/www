import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { GridStyles } from './Grid';

import '../css/global.css';

import theme from '../theme';

const Main = styled.main`
  margin: 0 auto;
  padding: 0 ${props => props.theme.layout.gutter}px;
  max-width: ${props => props.theme.layout.constrain}px;
  background-color: rgba(0, 0, 0, .1);
`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <GridStyles />
    <Main {...props} />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
