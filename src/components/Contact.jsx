import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

import Map from './Map';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
`;

const Contact = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current);
    emailjs.sendForm('service_frmy80d', 'template_3vg7a3e', ref.current, 'J5o2Ecs5C8ew0F9ly')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder='Name' name='name' />
            <Input placeholder='Email' name='email' />
            <TextArea placeholder='Write your message' name='message' rows={10} />
            <Button type='submit'>Send</Button>
            {success && <span>Your message has been sent</span>}
          </Form>
        </Left>
        <Right><Map/></Right>
      </Container>
    </Section>
  )
}

export default Contact