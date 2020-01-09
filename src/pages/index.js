import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { Row, Col } from '../components/Grid';
import Box from '../components/Box';

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const Header = styled(Box)`
  height: 100vh;
  font-family: 'Roboto Mono';
  font-size: 4em;
`;

const Footer = styled(Box)`
  background-color: aliceblue;
  font-family: Roboto Mono;
`;

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
        <Row>
          <Col span={24}>
            <Header>
              Here is the header.
            </Header>

            <Footer>
              Get in touch! hello@stephadams.co.uk
            </Footer>
          </Col>
        </Row>
    </Layout>
  );
};

export default IndexPage;
