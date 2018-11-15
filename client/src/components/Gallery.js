import React from 'react'
import axios from 'axios'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import {
  Container,
  Segment,
  Header,
} from 'semantic-ui-react'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'defmethod' });


class Gallery extends React.Component {
  state = { gallery: [], }

  // componentDidMount() {
    // axios.get('https://res.cloudinary.com/defmethod/gallery_images/')
    //   .then(res => {
    //     debugger
    //     console.log(res.data.resources);
    //     this.setState({ gallery: res.data.resources });
    //   });
  //   axios({
  //     method: 'get',
  //     url: 'https://res.cloudinary.com/defmethod',
  //     data: {
  //       title: '',
  //       url: ''
  //     }
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })
  // }

render() {
  return(
    <Container>
      this is gallery
      <CloudinaryContext cloudName="defmethod">
          <Image publicId="better_vw.jpg" >
            <Transformation height="150" width="150" crop="fill" radius="20" />
          </Image>
        <Image publicId="gallery_images/dolph_vw.jpg" >
          <Transformation height="150" width="150" crop="fill" radius="20" />
        </Image>
      </CloudinaryContext>
    </Container>
  )
}
}

export default Gallery
