import React from 'react';

import Layout from './../components/Layout';

const TalksPageInner = props => {
  return (
    <div>
      <br />
      <h1>Google Developers Group Algeria</h1>
      <ul>
        <li>
          <a href="https://devfest.gdgalgiers.com/#Speakers" target="_blank">
            2019-10-26 | React Native & Release-Agility w/ CodePush | DevFest'19
            Algiers
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://www.meetup.com/fr-FR/GDG-Constantine/events/264011930/"
            target="_blank"
          >
            2019-11-28 | React Native CI/CD with MSFT AppCenter | DevFest'19
            Constantine
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://www.meetup.com/fr-FR/GDG-Ghardaia/events/266991074/"
            target="_blank"
          >
            2019-12-07 | From Code To Production w/ CI/CD Pipelines | DevFest'19
            Ghardaia
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://www.meetup.com/fr-FR/GDG-Ghardaia/events/267183449/"
            target="_blank"
          >
            2019-12-21 | Hands-on Google Cloud Platform, gcloud SDK | GCP Study
            Jam
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://www.meetup.com/fr-FR/GDG-Ghardaia/events/269204430/"
            target="_blank"
          >
            2020-03-07 | Building Web & Mobile Apps using Firebase | Firebase
            Study Jam
          </a>
        </li>
        <br />
        <li>
          <a
            href="https://www.meetup.com/GDG-Ghardaia/events/269382809/"
            target="_blank"
          >
            2020-03-14 | Hands-on Qwiklabs & GCP Essentials codelab | GCP Study
            Jam
          </a>
        </li>
      </ul>
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
