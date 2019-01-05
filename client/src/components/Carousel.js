import React from 'react'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import {
  Segment, 
  Header,
} from 'semantic-ui-react'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

class Carousel extends React.Component {
  state = {
    publicId: [
      "gallery_images/dolph_vw.jpg",
      "gallery_images/better_vw.jpg",
    ],
    currentIndex: 0,
  }

  getImages = () => {
    const { publicId, currentIndex } = this.state
    return(
    publicId.map((pubId, i) => {
      if (currentIndex === i)
        return (
          <Image key={i} publicId={pubId} cloud_name='defmethod' >
            <Transformation
              height="400"
              width="400"
              crop="fill"
              radius="20"
            />
          </Image>
        )
    }))
  }

  goToPrevSlide = () => {
    const {publicId} = this.state
    const last_element = publicId.length - 1
    if ( this.state.currentIndex === 0 ) {
      return ( this.setState({
        currentIndex: last_element
      }))
    } 
    else (this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      })))
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.publicId.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }))
  }

  render() {
    return (
      <Segment basic style={styles.container} >
        <CloudinaryContext style={styles.cloudBox} cloudName="defmethod">
          {this.getImages()}
        </CloudinaryContext>
        <Segment style={styles.buttons} basic >
          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
          <RightArrow goToNextSlide={this.goToNextSlide} />
        </Segment>
      </Segment>
    )
  }
}

const styles = {
  container: {
    height: '350px',
    width: 'auto',
  },
  cloudBox: {
    border: 'solid red 3px',
    display: 'flex',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    bottom: '60%',
  },
}


export default Carousel
