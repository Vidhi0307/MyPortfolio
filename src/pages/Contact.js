import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';

 const Contact= () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container  className=' '>
        
     <form className='email' ref={form} onSubmit={sendEmail}>
      <label className='fs-2'>Name</label>
      <input type="text" name="user_name" />
      <label className='fs-2'>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea  name="message" />
      <input type="submit" value="Send" />
    </form>
    </Container>
  );
};

export default Contact;