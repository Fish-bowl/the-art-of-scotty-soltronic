import React, { Component } from 'react'
import { 
  Header,
  Container,
  Segment,
  Grid,
  Image,
} from 'semantic-ui-react'
import Carousel from './Carousel'

class Home extends Component {
  render() {
    return (
      // <Container>
      <div>
        <Segment style={styles.backgroundImage} >
          <p>this is large high res pic</p>
        </Segment>
        <Grid stackable >
          <Grid.Row style={styles.test.row} columns='3'>
            <Grid.Column style={styles.test.column} width='4' >
              <Segment inverted>
                <h1>this will be why you make art</h1>
              </Segment>
            </Grid.Column>
            <Grid.Column width='8' >
              <Carousel />
            </Grid.Column>
            <Grid.Column width='4' >
              <Segment inverted>
                <h1>this will be your social links</h1>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      // </Container>
    )
  }
}

const styles = {

  test: {
    row: {
      display: 'flex',
    },
    column: {
      alignContent: 'center'
    },
  },

  grid: {

  },
  carouselColumn: {

  },
  mainHeader: {
    paddingTop: '2%',
    paddingBottom: '2%',
    fontSize: '45px',
  },
  backgroundImage: {
    position: 'fixed',
    zIndex: '-1',
    height: '600px',
    width: '100vw',
    backgroundColor: 'gray'
  },
}

export default Home
