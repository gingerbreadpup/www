import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
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
    allFile(filter: { relativePath: { eq: "gatsby-astronaut.png" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => ({
    path: frontmatter.path,
    title: frontmatter.title,
  }));

  return (
    <Layout>
      <SEO title="Home" />

      <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
      
      {projects.length && (
        <Row gutter={20}>
          {projects.map(project => (
            <Col
              key={project.title}
              xs={24}
              sm={8}
            >
              <Box
                b="2px solid currentColor"
                m="10px 0"
                p={10}
              >
                <Link to={project.path}>{project.title}</Link>
              </Box>
            </Col>
          ))}
        </Row>
      )}
    </Layout>
  );
};

export default IndexPage;
