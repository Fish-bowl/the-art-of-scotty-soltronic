import React from 'react'
import {
  Icon,
  Segment,
  Button,
} from 'semantic-ui-react'

class MediaIcons extends React.Component {

  handleClick = () => {
    alert("i've been clicked")
  }

  handleFb = () => {
    alert('fb')
  }

  handleInsta = () => {
    alert('insta')
  }

  handleMail = () => {
    alert('mail')
  }

  render() {
    return(
      <Segment compact style={styles.container} inverted>
        <Button icon='facebook' size='large' basic color='blue' circular onClick={this.handlefb} />
        <Button icon='instagram' size='large' basic color='grey' circular onClick={this.handleInsta} />
        <Button icon='mail' size='large' basic color='red' circular onClick={this.handleMail} />
        {/* <Icon size='large' name='facebook' color='blue' />
        <Icon size='large' name='instagram' color='grey' />
        <Icon size='large' name='mail' golor='red' /> */}
      </Segment>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },

  icons: {}
}

export default MediaIcons
