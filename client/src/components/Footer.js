import React from 'react'
import {
  Segment,
  Divider,
  Header,
  Icon,
  Grid,
} from 'semantic-ui-react'

class Footer extends React.Component {
  render() {
    return(
      <Segment style={styles.seg} >
        <Header as='h3'>this is your copyright stuff</Header>
      </Segment>
      // <Grid style={styles.seg} >
      //   <Grid.Row columns={3} >
      //     <Grid.Column width={4} >
      //       media icons
      //     </Grid.Column>
      //     <Grid.Column width={6}>
      //       copyright and such
      //     </Grid.Column>
      //     <Grid.Column width={4}>
      //       other links
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>
    )
  }
}

const styles = {
  seg: {
    // position: 'fixed',
    // top: '86vh',
    width: '100%',
    height: '80px',
    backgroundColor: 'maroon'
  }
}

export default Footer
