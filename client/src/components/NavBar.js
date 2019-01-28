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
    const {activeItem} = this.state
    return (
      <Menu stackable style={styles.menu} secondary pointing >
        <Menu.Item 
          style={styles.menuItem} 
          as={Link} 
          to='/' 
          name='Home' 
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          style={styles.menuItem} 
          as={Link} 
          to='/About' 
          name='About' 
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          style={styles.menuHeader} 
          header 
          as={Link} 
          to='/' 
          name='The Art of Scotty Soltronic' 
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          style={styles.menuItem} 
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick} 
          as={Link} 
          to='/Contact' 
          name='Contact' 
        />
        <Menu.Item 
          style={styles.menuItem} 
          as={Link} 
          to='/Gallery' 
          name='Gallery' 
          active={activeItem === 'Gallery'}
          onClick={this.handleItemClick} 
        />
      </Menu>
    );
  }
}

  const styles = {
    menu: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '70px',
      backgroundColor: 'black',
    },
    menuHeader: {
      marginLeft: '25px',
      marginRight: '25px',
      alignSelf: 'center',
      fontSize: '25px'
    },
    menuItem: {
      marginLeft: '25px',
      marginRight: '25px',
      alignSelf: 'center',
      color: 'white'

    },
  }

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
