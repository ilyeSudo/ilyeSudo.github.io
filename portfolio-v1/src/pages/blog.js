import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';

const BlogPageInner = props => {
  return (
    <div>
      <br />
      <br />
      <br />
      <p>// TODO: add blog section</p>
    </div>
  );
};

const BlogPage = props => {
  return (
    <Layout>
      <BlogPageInner {...props} />
    </Layout>
  );
};

export default BlogPage;

// export const query = graphql`
//   query {
//     allMdx(
//       filter: {
//         frontmatter: { publish: { eq: true } }
//         fields: { type: { eq: "post" } }
//       }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
