import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Admin } from './components/Admin';
import { Public } from './components/Public';
import { LandingView } from './views/Public/LandingView';
import { NotFound } from './views/Shared/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/' exact
          component={LandingView} />

        <Route
          path='/admin'
          component={Admin} />

        <Route
          path='/404' exact
          component={NotFound} />

        <Route
          path='/:slug'
          component={Public} />

        <Route
          component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
