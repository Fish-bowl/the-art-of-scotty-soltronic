import React from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import {
  Container,
  Segment,
  Header,
  Card,
  Divider,
} from 'semantic-ui-react'
import FishSlider from './FishSlider'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

class Gallery extends React.Component {
  state = {
    // fish: [
    //   "art_photos/blueFish",
    //   "art_photos/yellowFish",
    //   "art_photos/tracktorFish",
    //   "art_photos/pcFish",
    //   "art_photos/purpleFish",
    //   "art_photos/blueFish",
    // ],

    publicId: [
      "art_photos/wallFlower",
      "art_photos/sunFlower",
      "art_photos/pottedFlower",
      "art_photos/",

    ], 
  }


  
  // style = { styles.image }
 
  render() {
    return(
      <div>
        <Segment inverted >
          <Header textAlign='center' as='h2'>Fish</Header>
          <Divider />
            <Segment inverted >
              <FishSlider />
            </Segment>
            <Header textAlign='center' as='h2'>Flowers</Header>
            <Divider />
            <Segment inverted >
              <FishSlider />
            </Segment>
            <Divider />
            <Segment inverted >
              <FishSlider />
            </Segment>
        </Segment>
      </div>
          // <Container>
          //   <Segment>
          //     <CloudinaryContext cloudName="defmethod">
          //       <Card>
          //         <Image cloud_name='defmethod' publicId="art_photos/fishWithScott">
          //           <Transformation
          //             height="300"
          //             width="300"
          //             crop="fit"
          //           />
          //         </Image>
          //       </Card>
          //       <Card.Group itemsPerRow={4} centered stackable >
          //         {this.getFish()}
          //       </Card.Group>
          //     </CloudinaryContext>
          //   </Segment>
          // </Container>
    )
  }
}




const styles = {
  card: {
    width: 'auto'
  },

  image: {
    height: '300px',
    width: '300px',
  },
}

export default Gallery
