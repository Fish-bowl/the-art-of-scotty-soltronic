import React from 'react'
import {
  Segment,
  Button,
} from 'semantic-ui-react'

class MediaIcons extends React.Component {

  handleClick = () => {
    alert("i've been clicked")
  }

  // handleFb = () => {
  //   alert('fb')
  // }

  // handleInsta = () => {
  //   alert('insta')
  // }

  // handleMail = () => {
  //   alert('mail')
  // }

  render() {
    return(
      <Segment compact style={styles.container} inverted>
        <Button 
        href="https://www.facebook.com/soltronic" 
        target='_blank' 
        icon='facebook' 
        size='large' 
        basic 
        color='blue' 
        circular 
      />
        <Button 
          href="https://www.instagram.com/scottysoltronic/" 
          target="_blank" 
          icon='instagram' 
          size='large' 
          basic 
          color='grey' 
          circular 
        />
        <Button icon='mail' size='large' basic color='red' circular onClick={this.handleMail} />
      </Segment>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'sticky',
    top: '30px'
  },

  icons: {}
}

export default MediaIcons
