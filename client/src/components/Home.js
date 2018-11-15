import React, { Component } from 'react'
import { 
  Header,
  Container,
  Segment,
  Grid,
  Image
} from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <Grid stackable >
        <Grid.Row columns='1' >
          <Grid.Column width='16'>
            <Header style={styles.mainHeader} textAlign='center' as='h1'>The Art of Scotty Soltronic</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns='3'>
          <Grid.Column width='4' >
            <Segment inverted>
              <h1>this will be why you make art</h1>
            </Segment>
          </Grid.Column>
          <Grid.Column width='8' >
            <Segment inverted>
              <h1>this will be a random image carousel</h1>
              <Image publicId="samples/food/pot-mussels.jpg" >

              </Image>
            </Segment>
          </Grid.Column>
          <Grid.Column width='4' >
            <Segment inverted>
              <h1>this will be your social links</h1>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const styles = {
  mainHeader: {
    paddingTop: '2%',
    paddingBottom: '2%',
    fontSize: '45px',
  },
}

export default Home
