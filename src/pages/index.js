import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Row, Col } from '../components/Grid';
import Box from '../components/Box';

const projects = [
  'Project 1',
  'Project 2',
  'Project 3',
  'Project 4',
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    {projects.length && (
      <Row gutter={20}>
        {projects.map(project => (
          <Col
            key={project}
            xs={24}
            sm={8}
          >
            <Box
              b="2px solid currentColor"
              m="10px 0"
              p={10}
            >{project}</Box>
          </Col>
        ))}
      </Row>
    )}
  </Layout>
);

export default IndexPage;
