import { Router, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import history from './modules/history';
import Loader from './components/Loader';

const Home = lazy(() => import('./routes/Home'));

export default function RouteHandler() {
  return (
    <Suspense fallback={<Loader />}>
      <Router history={history}>
        <Route path="/" component={Home} />
      </Router>
    </Suspense>
  );
}
