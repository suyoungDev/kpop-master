import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { COLORS, SIZES, FONT, SCREEN } from '../../../constants/theme';
import CleanCard from '../../../components/Card/CleanCard';

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: ${({ message }) => (message ? '100px' : '1rem')};
  padding: 1.2rem 1rem;

  margin: 1rem 0;

  border-radius: ${SIZES.radiusSmall};
  border: 1px solid ${COLORS.primary};

  font-size: 0.8rem;
  font-family: ${FONT.korean};
  font-weight: 200;
  color: ${COLORS.headingDarkGray};

  &:focus {
    outline: none;
  }

  @media ${SCREEN.tablet} {
    margin: ${({ userInfo }) => (userInfo ? '0 1rem 0 0' : '1.3rem 0 0 0')};
    margin: ${({ userMail }) => userMail && '0 0 0 0'};
  }
`;

const Label = styled.label`
  font-size: 0.7rem;
  position: absolute;
  left: 15px;
  top: 13px;
  background-color: white;
  padding: 0 7px;

  color: ${COLORS.primary};
  font-family: ${FONT.english};
  text-transform: uppercase;

  @media ${SCREEN.tablet} {
    top: ${({ firstRow }) => (firstRow ? '-8px' : '18px')};
  }
`;

const SubmitButton = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: ${SIZES.radiusSmall};
  margin-top: 1rem;

  font-size: 0.7rem;
  background: linear-gradient(20deg, #fff3d6 0%, ${COLORS.secondaryDark} 100%);
  color: ${COLORS.primaryDark};
  letter-spacing: 1px;
  font-weight: 600;
  font-family: ${FONT.english};
  text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${SCREEN.tablet} {
    flex-direction: row;
  }
`;

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
