import React from 'react';
import { Helmet } from 'react-helmet-async';
import config from 'config';
import { Grommet } from 'grommet';
import { ToastContainer } from 'react-toastify';
import { main } from './theme/main';
import RouteHandler from './router';

export class App extends React.Component {
  render() {
    return (
      <Grommet theme={main} full>
        <Helmet
          defer={false}
          htmlAttributes={{ lang: 'en' }}
          encodeSpecialCharacters={true}
          defaultTitle={config.name}
          titleTemplate={`%s | ${config.name}`}
          titleAttributes={{ itemprop: 'name', lang: 'en' }}
        >
          <script src="import.js" />
        </Helmet>
        <ToastContainer />
        <RouteHandler />
      </Grommet>
    );
  }
}

export default App;
