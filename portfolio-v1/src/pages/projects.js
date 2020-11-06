import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';

const ProjectsPageInner = props => {
  return (
    <div>
      <br />
      <br />
      <br />
      <p>// TODO: add projects section</p>
    </div>
  );
};

const ProjectsPage = props => {
  return (
    <Layout>
      <ProjectsPageInner {...props} />
    </Layout>
  );
};

export default ProjectsPage;

// export const query = graphql`
//   query {
//     allMdx(
//       filter: {
//         frontmatter: { publish: { eq: true } }
//         fields: { type: { eq: "project" } }
//       }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//             lede
//           }
//           fields {
//             slug
//             projectType
//           }
//         }
//       }
//     }
//   }
// `;
