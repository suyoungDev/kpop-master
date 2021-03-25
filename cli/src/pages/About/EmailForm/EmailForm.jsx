import React from 'react';
import emailjs from 'emailjs-com';

import CleanCard from '../../../components/Card/CleanCard';
import {
  Form,
  Container,
  Input,
  Label,
  SubmitButton,
  Row,
} from '../EmailForm/EmailForm.styles';

export default function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c1z45yd',
        'template_evmlcwg',
        e.target,
        'user_FtiFaXbSTwnhWDRNVMUXG'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <CleanCard mail>
      <Form className='contact-form' onSubmit={sendEmail}>
        <input type='hidden' name='contact_number' />
        <Row>
          <Container>
            <Label firstRow>Name</Label>
            <Input type='text' name='name' userInfo require />
          </Container>
          <Container>
            <Label firstRow>Email</Label>
            <Input type='email' name='email' userMail require />
          </Container>
        </Row>
        <Container>
          <Label>subject</Label>
          <Input type='text' name='subject' />
        </Container>
        <Container>
          <Label>Message</Label>
          <Input as='textarea' name='message' message require />
        </Container>
        <SubmitButton type='submit' value='Send Message' />
      </Form>
    </CleanCard>
  );
}
