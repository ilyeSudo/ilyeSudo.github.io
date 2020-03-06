import React from 'react';

import Layout from './../components/Layout';

const TalksPageInner = props => {
  return (
    <div>
      <br />
      <br />
      <br />
      <p>// TODO: add talks section</p>
    </div>
  );
};

const TalksPage = props => {
  return (
    <Layout>
      <TalksPageInner {...props} />
    </Layout>
  );
};

export default TalksPage;
