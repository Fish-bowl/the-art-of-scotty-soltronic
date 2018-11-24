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
        <p>
          Proident excepteur aliqua ad commodo deserunt aliquip id pariatur. Et dolore ullamco ullamco ea labore laborum occaecat id laboris exercitation ullamco dolor in incididunt. Quis qui fugiat deserunt quis commodo reprehenderit deserunt ipsum irure laborum consequat. Eu exercitation aliquip ullamco est. Aute aliquip sint deserunt mollit tempor cupidatat eu deserunt fugiat aute. Veniam amet nisi tempor labore reprehenderit cillum exercitation eu elit pariatur.
          Irure veniam consectetur cillum incididunt adipisicing ad eu et. Magna duis sit pariatur esse in quis deserunt duis aliquip in cupidatat pariatur anim nisi. Velit do dolore proident sunt enim id eiusmod elit aliqua officia ea reprehenderit sit. Voluptate enim minim veniam in id proident non veniam laborum commodo laboris officia. Sint cillum consectetur Lorem laborum cupidatat. Irure in irure irure id incididunt est laborum quis in pariatur ex proident duis.
          Magna aute eiusmod velit adipisicing officia eiusmod dolor nostrud labore pariatur aliqua excepteur voluptate. Adipisicing cillum qui quis sint dolore proident incididunt sit qui irure laborum. Sit nulla esse magna Lorem excepteur adipisicing tempor. Eu laborum pariatur id mollit. Commodo non ullamco dolor voluptate irure mollit ut veniam proident eu esse. Ex laborum laborum velit aliquip. Do ad qui irure sint consequat anim voluptate esse aliquip labore reprehenderit reprehenderit cupidatat.
        </p>
        <p>
          Proident excepteur aliqua ad commodo deserunt aliquip id pariatur. Et dolore ullamco ullamco ea labore laborum occaecat id laboris exercitation ullamco dolor in incididunt. Quis qui fugiat deserunt quis commodo reprehenderit deserunt ipsum irure laborum consequat. Eu exercitation aliquip ullamco est. Aute aliquip sint deserunt mollit tempor cupidatat eu deserunt fugiat aute. Veniam amet nisi tempor labore reprehenderit cillum exercitation eu elit pariatur.
          Irure veniam consectetur cillum incididunt adipisicing ad eu et. Magna duis sit pariatur esse in quis deserunt duis aliquip in cupidatat pariatur anim nisi. Velit do dolore proident sunt enim id eiusmod elit aliqua officia ea reprehenderit sit. Voluptate enim minim veniam in id proident non veniam laborum commodo laboris officia. Sint cillum consectetur Lorem laborum cupidatat. Irure in irure irure id incididunt est laborum quis in pariatur ex proident duis.
          Magna aute eiusmod velit adipisicing officia eiusmod dolor nostrud labore pariatur aliqua excepteur voluptate. Adipisicing cillum qui quis sint dolore proident incididunt sit qui irure laborum. Sit nulla esse magna Lorem excepteur adipisicing tempor. Eu laborum pariatur id mollit. Commodo non ullamco dolor voluptate irure mollit ut veniam proident eu esse. Ex laborum laborum velit aliquip. Do ad qui irure sint consequat anim voluptate esse aliquip labore reprehenderit reprehenderit cupidatat.
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
  }
}
