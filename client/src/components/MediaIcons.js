import React from 'react'
import {
  Icon,
  Segment,
} from 'semantic-ui-react'

class MediaIcons extends React.Component {
  render() {
    return(
      <Segment compact style={styles.container} inverted>
        <Icon size='large' name='facebook' color='blue' />
        <Icon size='large' name='instagram' color='grey' />
        <Icon size='large' name='mail' golor='red' />
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
