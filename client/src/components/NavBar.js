import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  // rightNavs = () => {
  //   const { user, dispatch, history } = this.props;

  //   if (user.id) {
  //     return (
  //       <Menu.Menu position='right'>
  //         <Menu.Item
  //           name='Logout'
  //           onClick={() => dispatch(handleLogout(history))}
  //         />
  //       </Menu.Menu>
  //     );
  //   }
  //   return (
  //     <Menu.Menu position='right'>
  //       <Link to='/register'>
  //         <Menu.Item name='Register' />
  //       </Link>
  //       <Link to='/login'>
  //         <Menu.Item name='Login' />
  //       </Link>
  //     </Menu.Menu>
  //   );
  // }
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu stackable size='huge' pointing secondary>
        <Menu.Item 
          style={{alignSelf: 'center', justifySelf: 'center'}} 
          header 
          as={Link}
          name='home' 
          to='/'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
            The Art of Scotty Soltronic
        </Menu.Item>
        <Menu.Item 
          active={activeItem === 'Gallery'}
          onClick={this.handleItemClick} 
          as={Link} 
          to='/Gallery' 
          name='Gallery' 
        />
        <Menu.Item 
          as={Link} 
          to='/Paintings' 
          name='Paintings'
          active={activeItem === 'Paintings'}
          onClick={this.handleItemClick} 
        />
        <Menu.Item 
          as={Link} 
          to='/About' 
          name='About' 
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          as={Link} 
          to='/Contact' 
          name='Contact' 
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

const styles = {
  menu: {
    display: 'flex',
    justifyContent: 'center'
  },
  leftItem: {
    paddingLeft: '10%',
    fontSize: '1.25em',
    alignSelf: 'center'
  },
  rightItem: {
    paddingRight: '10%',
    fontSize: '1.25em',
    alignSelf: 'center'
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
