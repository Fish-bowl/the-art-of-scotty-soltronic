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
import FlowerSlider from './FlowerSlider'
import ChandelierSlider from './ChandelierSlider'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

class Gallery extends React.Component {

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
            <FlowerSlider />
          </Segment>

          <Header textAlign='center' as='h2'>Chandeliers</Header>
          <Divider />
          <Segment inverted >
            <ChandelierSlider />
          </Segment>
          
        </Segment>
      </div>
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
