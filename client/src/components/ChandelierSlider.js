import React from "react";
import Slider from "react-slick";
import { Card, Segment, } from 'semantic-ui-react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

class ChandelierSlider extends React.Component {
  state = {
    fish: [
      "art_photos/chandelier1",
      "art_photos/chandelier2",
      "art_photos/chandelier_man",
    ],
  }

  getFish = () => {
    const { fish } = this.state
    return (
      fish.map((pubId, i) => {
        return (
          <div style={styles.imageContainer} >
            <Image key={i} publicId={pubId} cloud_name='defmethod' >
              <Transformation
                height="300"
                width="400"
                crop="fill"
              />
            </Image>
          </div>
        )
      }))
  }

  // componentDidMount() {
  //   this.slider.slickPlay();
  // }

  render() {
    const settings = {
      rows: 1,
      slidesPerRow: 1,
      centerMode: true,
      draggable: true,
      // centerPadding: '50px',
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Segment inverted style={styles.container} >
        <Slider {...settings}>
          {this.getFish()}
        </Slider>
      </Segment>
    );
  }
}

const styles = {
  container: {
    maxWidth: '100vw'
  },

  imageContainer: {
    width: '400px',
    height: '400px',
  },

  card: {
    width: 'auto'
  },

  image: {
    height: '300px',
    width: '300px',
  },
}

export default ChandelierSlider
