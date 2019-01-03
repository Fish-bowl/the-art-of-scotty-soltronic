import React from 'react'
import axios from 'axios'
import {
  Segment,
  Form,
  Container,
  Button,
  Header,
  TextArea,
  Input,
  Divider,
} from 'semantic-ui-react'

  // const templateParams = {
  //   name: 'James',
  //   notes: 'Check this out!'
  // };

  const data = {
    service_id: 'gmail',
    template_id: 'template_X6vyvytd',
    user_id: 'user_GiKbsc5IjU1bmVSa4G5zf',
    template_params: {
        'username': 'James',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
  }

class Contact extends React.Component {
  state = {
    template_params: {
      from_name: '',
      message: '',
    },
    first_name: '',
    last_name: '',
    email: '',
    message: ''
  }

  sender = () => {

    axios.post('https://api.emailjs.com/api/v1.0/')
      .then(res => {
        console.log(res.data)
      })

    // emailjs.send('gmail','template_X6vyvytd', this.state.templateParams)
    //   .then(function(response) {
    //      console.log('SUCCESS!', response.status, response.text);
    //   }, function(err) {
    //      console.log('FAILED...', err);
    //   });

  }



  componentDidMount() {

  }
  //   handleOnSubmit = event => {
  //     event.preventDefault();
  //     // this.props.submitContactReqToServer(‘/contacts’, this.state)
  //     this.setState({ name: ‘’, email: ‘’, message: ‘’ })
  //  }

  //   handleOnChange = event => {
  //     this.setState({
  //       [event.target.name]: event.target.value
  //     });
  //   }
  render() {
    return (
      <div style={styles.parentDiv} >
        <Container>
          <Header style={styles.header} as='h1'>Want To perchase a peice of my work?</Header>
          <Header style={styles.header} as='h3'>
            fill out the form below and please include the peice in question. 
            <Divider horizontal>Or</Divider>
            if you would like one custom made,  please give as many details as possible
          </Header>
          <Divider />
          <Segment inverted >
            <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input name="Name" placeholder="Name" label="Name"  />
              <Form.Input name="email" placeholder="Email" label="Email" />
            </Form.Group>
            <Form.TextArea name='message' placeholder='Message' lable="message" />
              <Form.Button type="submit">Submit</Form.Button>
            </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

const styles = {
  parentDiv: {
    minHeight: '82vh',
  },
  header: {
    color: 'black',
    textAlign: 'center',
  },

}

export default Contact
