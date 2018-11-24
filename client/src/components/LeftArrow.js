import React from 'react';
import {
  Icon,
  Button,
} from 'semantic-ui-react'

const LeftArrow = (props) => {
  return (
    <Button 
      icon='angle double left' 
      // style={styles.left} 
      onClick={props.goToPrevSlide} 
      circular
    />
  );
}

// const styles = {
//   left: {
//     position: 'absolute',
//     top: '50%',
//   },
// }

export default LeftArrow;
