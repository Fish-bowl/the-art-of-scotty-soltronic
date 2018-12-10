import React from 'react'
import {
  Container,
  Segment,
  Header,
  Grid
} from 'semantic-ui-react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

export default () =>
  // <Container>
  //   <Grid>
  //     <Grid.Row>
  //       <Grid.Column width={3}>
  //         <Segment style={styles.image} >
  //         </Segment>
  //       </Grid.Column>
  //       <Grid.Column width={13} >
  //         <Segment>
  //           <p>
  //             Proident excepteur aliqua ad commodo deserunt aliquip id pariatur. Et dolore ullamco ullamco ea labore laborum occaecat id laboris exercitation ullamco dolor in incididunt. Quis qui fugiat deserunt quis commodo reprehenderit deserunt ipsum irure laborum consequat. Eu exercitation aliquip ullamco est. Aute aliquip sint deserunt mollit tempor cupidatat eu deserunt fugiat aute. Veniam amet nisi tempor labore reprehenderit cillum exercitation eu elit pariatur.
  //           </p>
  //         </Segment>
  //       </Grid.Column>
  //     </Grid.Row>
  //   </Grid>
  // </Container>
  <Container>
    <Segment style={styles.seg} fluid inverted >
        <Image style={styles.image} publicId='art_photos/fishWithScott' cloud_name='defmethod' >
          <Transformation
            height="300"
            width="300"
            crop="fit"
            />
        </Image>
        <p style={styles.para} >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One part Inventor, one part Artist and 3  parts Mad Scientist, Based in Park City, Utah, Whitaker’s work is funny, whimsical and down right insane. Inspired by the broken and discarded items of a society bent on consumption, Whitaker developed his own Aesthetic called “Jenk”
        </p>
        <p style={styles.para} >
          Each piece of “Jenk” has a story and has lived another life. These treasures contain an energy that when combined with each other, tell a new story. His work represents over two decade of selective treasure hunting, polishing and organizing. Each piece is built entirely from reclaimed and recycled materials, giving them one more shot at life. This work shouts loudly at the viewer, “There is no such thing as trash, only treasure.” and urges the viewer to examine their own use of these precious resources.
        </p>
        <p style={styles.para} >
          Whitaker is the founder of the Utah based artist collective the JenkStars whose mission it is to educate through Art Music and Technology,  who travel the country with their solar powered art installations spreading the word on sustainability. He is also the founder of the Buildingman Sustainable Living Art and Music Festival held twice a year at the JenkStar Ranch in Green River Utah.
        </p>
        <p style={styles.para} >
          Whitaker recently established the non profit JenkStar CASL, Center for Art and Sustainable Living in Salt Lake City and hosts events to support local artists, musicians and scientists in their pursuit of sustainable living.
        </p>
        <p style={styles.para} >
          'You never change things by fighting the existing reality.To change something, build a new model that makes the old one obsolete.' ~ Buckminster Fuller
         
        </p>
    </Segment>
  </Container>

const styles = {
  seg: {
    minHeight: '550px'
  },
  image: {
    marginRight: '15px',
    height: '300px',
    width: '300px',
    float: 'left',
  },
  para: {
    fontSize: '1.5em'
  },
}
