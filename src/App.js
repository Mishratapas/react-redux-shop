import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <ToastContainer />
        <Navigation />
        <Switch>
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/' component={Home} />
          <Redirect to='/not-found' />
        </Switch>
      </Router>
    </div>
  );
}
