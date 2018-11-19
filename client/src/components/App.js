import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Gallery from './Gallery'
import Contact from './Contact'
import Paintings from './Paintings'
import About from './About'
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
// import FetchUser from './FetchUser';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        {/* <FetchUser> */}
          <Switch>
            <Route exact path='/Paintings' component={Paintings} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Gallery' component={Gallery} />
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        {/* </FetchUser> */}
      </div>
    );
  }
}

export default App;
