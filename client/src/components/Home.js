import React, { Component } from 'react'
import { 
  Segment,
  Grid,
  Divider,
} from 'semantic-ui-react'
import Carousel from './Carousel'
import MediaIcons from './MediaIcons'


class Home extends Component {
  render() {
    return (
      <div>
        <Divider section />
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
            <Grid.Column style={{position: 'relative'}} width='4' >
              <MediaIcons style={{}} />
            </Grid.Column>
          </Grid.Row>
          <Divider/>
          <Grid.Row style={{ display: 'flex', justifyContent: 'center',}} columns={1} >
            <Grid.Column style={styles.test.column} width={10} >
              <Segment inverted >
                <p>
                  Labore nisi non commodo cillum. Et eu est non qui voluptate qui non consequat. Consectetur tempor sit labore aliqua nulla irure ea officia qui Lorem nostrud minim non. Aliquip in id consectetur adipisicing cupidatat sunt quis sunt incididunt voluptate duis esse. Irure proident occaecat fugiat incididunt mollit aliquip. Deserunt consequat consectetur exercitation enim dolore Lorem enim ea excepteur. Excepteur aliqua consectetur nostrud mollit do ad reprehenderit magna magna magna ex velit velit laborum.
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ display: 'flex', justifyContent: 'center', }} columns={1} >
            <Grid.Column style={styles.test.column} width={10} >
              <Segment inverted >
                <p>
                  Labore nisi non commodo cillum. Et eu est non qui voluptate qui non consequat. Consectetur tempor sit labore aliqua nulla irure ea officia qui Lorem nostrud minim non. Aliquip in id consectetur adipisicing cupidatat sunt quis sunt incididunt voluptate duis esse. Irure proident occaecat fugiat incididunt mollit aliquip. Deserunt consequat consectetur exercitation enim dolore Lorem enim ea excepteur. Excepteur aliqua consectetur nostrud mollit do ad reprehenderit magna magna magna ex velit velit laborum.
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ display: 'flex', justifyContent: 'center', }} columns={1} >
            <Grid.Column style={styles.test.column} width={10} >
              <Segment inverted >
                <p>
                  Labore nisi non commodo cillum. Et eu est non qui voluptate qui non consequat. Consectetur tempor sit labore aliqua nulla irure ea officia qui Lorem nostrud minim non. Aliquip in id consectetur adipisicing cupidatat sunt quis sunt incididunt voluptate duis esse. Irure proident occaecat fugiat incididunt mollit aliquip. Deserunt consequat consectetur exercitation enim dolore Lorem enim ea excepteur. Excepteur aliqua consectetur nostrud mollit do ad reprehenderit magna magna magna ex velit velit laborum.
                </p>
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
    height: '100vh',
    top: '0',
    width: '100vw',
    backgroundColor: 'gray'
  },
}

export default Home
