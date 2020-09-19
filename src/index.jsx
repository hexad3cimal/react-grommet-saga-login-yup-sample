import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { HelmetProvider } from 'react-helmet-async';
import { store, persistor } from './store';

import App from './App';
import Loader from './components/Loader';
// import { register } from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
//
// /* istanbul ignore next */
// register({
//   onUpdate: () => {
//     // store.dispatch(showAlert(<Reload />, { id: 'sw-update', icon: 'bolt', timeout: 0 }));
//   },
// });
