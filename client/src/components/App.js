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
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import {Segment} from 'semantic-ui-react'
import BackgroundImage from './BackgroundImage'
// import FetchUser from './FetchUser';

class App extends Component {
  render() {
    return (
      <div>
        <Segment style={styles.backgroundImage} >
          <BackgroundImage />
        </Segment>
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
        <Footer />
      </div>
    );
  }
}

const styles = {
  backgroundImage: {
    position: 'fixed',
    zIndex: '-1',
    height: '100vh',
    top: '0',
    width: '100vw',
    padding: '0',
    
  },
}

export default App;
