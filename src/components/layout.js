import styled from 'styled-components';
import PropTypes from 'prop-types';

import '../css/global.css';

const Layout = styled.main``;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
