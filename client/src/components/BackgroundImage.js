import React from 'react'
// import {
//   Segment,
// } from 'semantic-ui-react'
import cloudinary from 'cloudinary-core';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });

class BackgroundImage extends React.Component{
  render(){
    return(
      <Image cloud_name='defmethod' publicId='art_photos/twister_painting' />
      // <div>background image</div>
    )
  }
}

export default BackgroundImage
