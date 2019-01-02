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
import Footer from './Footer'
import AuthRoute from './AuthRoute';

class App extends Component {
  render() {
    return (
      <div style={styles.background}>
        <NavBar />
        <Flash />
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
        <Footer />
      </div>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'gray'
  },
}

export default App;
