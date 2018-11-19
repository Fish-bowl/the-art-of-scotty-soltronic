import React from "react";
import Slider from "react-slick";
import { Card, } from 'semantic-ui-react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

class FishSlider extends React.Component {
  state = {
    fish: [
      "art_photos/blueFish",
      "art_photos/yellowFish",
      "art_photos/tracktorFish",
      "art_photos/pcFish",
      "art_photos/purpleFish",
      "art_photos/blueFish",
    ],
  }

  getFish = () => {
    const { fish } = this.state
    return (
      fish.map((pubId, i) => {
          return (
            <Card centered style={styles.card}  >
              <Image key={i} publicId={pubId} cloud_name='defmethod' >
                <Transformation
                  height="300"
                  width="300"
                  crop="fit"
                />
              </Image>
              <Card.Description>about the piece of art</Card.Description>
              <Card.Meta>price: $$$</Card.Meta>
            </Card>
          )
      }))
  }

  render() {
    const settings = {
      rows: 1,
      slidesPerRow: 5,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <Card.Group>
          {this.getFish()}
        </Card.Group>
      </Slider>
    );
  }
}

const styles ={
  card: {
    width: 'auto'
  },

  image: {
    height: '300px',
    width: '300px',
  },
}

export default FishSlider
